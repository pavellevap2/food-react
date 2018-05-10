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

const syncWithDb = function*() {
  yield put(showPreloader(true))
  const userData = yield select(getUserData)
  const localStorageToken = localStorage.getItem('userToken')
  const savedToken = yield select(getUserTokenId)
  const token = localStorageToken || userData.idToken || savedToken
  const database = yield call(syncWithDataBase, token + 'a')

  if (!database.error) {
    yield put(getDatabaseData(database))
  } else {
    const refreshToken = localStorage.getItem('refreshToken')
    const refreshedUserData = yield call(refreshUserData, refreshToken)
    const refreshedUserToken = refreshedUserData.id_token

    yield put(saveUserTokenId(refreshedUserToken))
    localStorage.setItem('userToken', refreshedUserToken)
    const databaseWithRefresh = yield call(syncWithDataBase, refreshedUserToken)
    yield put(getDatabaseData(databaseWithRefresh))
  }
  yield put(showPreloader(false))
}

const watcherSyncWithDb = function*() {
  yield takeEvery(SYNC_WITH_DB, syncWithDb)
}

export default watcherSyncWithDb
