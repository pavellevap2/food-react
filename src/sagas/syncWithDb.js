import { put, call, select, takeEvery } from 'redux-saga/effects'
import { getUserData, getUserTokenId } from '../selectors/auth'
import {
  SYNC_WITH_DB,
  getDatabaseData,
  showPreloader,
} from '../actions/database'
import syncWithDataBase from '../managers/syncWithDataBase'
import refreshUserData from '../managers/refreshUserData'
import { saveUserTokenId } from '../actions/auth'
import { getRestauraunts } from '../selectors/restauraunts'

const syncWithDb = function*() {
  yield put(showPreloader(true))
  const userData = yield select(getUserData)
  const localStorageToken = localStorage.getItem('refreshToken')
  const savedToken = yield select(getUserTokenId)

  const token = userData.idToken || localStorageToken || savedToken
  const database = yield call(syncWithDataBase, token)

  if (!database.error) {
    const databaseValues = Object.values(database)
    yield put(getDatabaseData(databaseValues))
  } else {
    const refreshToken = localStorage.getItem('refreshToken')
    const refreshedUserData = yield call(refreshUserData, refreshToken)
    const refreshUserToken = refreshedUserData.id_token

    yield put(saveUserTokenId(refreshUserToken))
    localStorage.setItem('userToken', refreshUserToken)
    const databaseWithRefresh = yield call(syncWithDataBase, refreshUserToken)
    const refreshDatabaseValues = Object.values(databaseWithRefresh)

    yield put(getDatabaseData(refreshDatabaseValues))
  }
  yield put(showPreloader(false))
}

const watcherSyncWithDb = function*() {
  yield takeEvery(SYNC_WITH_DB, syncWithDb)
}

export default watcherSyncWithDb
//[{...,key}] такой вид
