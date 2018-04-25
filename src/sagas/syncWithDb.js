import { put, call, select, takeEvery } from 'redux-saga/effects'
import { getUserData, getUserTokenId } from '../selectors/auth'
import { SYNC_WITH_DB, getDatabaseData } from '../actions/database'
import syncWithDataBase from '../managers/syncWithDataBase'
import refreshUserData from '../managers/refreshUserData'

const syncWithDb = function*() {
  const userData = yield select(getUserData)
  const localStorageToken = localStorage.getItem('refreshToken')
  const savedToken = yield select(getUserTokenId)

  const token = userData.idToken || localStorageToken || savedToken
  const database = yield call(syncWithDataBase, token)

  if (!database.error) {
    yield put(getDatabaseData(database))
  } else {
    const refreshToken = localStorage.getItem('refreshToken')
    const refreshedUserData = yield call(refreshUserData, refreshToken)
    const refreshDataToken = refreshedUserData.id_token

    localStorage.setItem('userToken', refreshDataToken)
    const databaseWithRefresh = yield call(syncWithDataBase, refreshDataToken)
    yield put(getDatabaseData(databaseWithRefresh))
  }
}

const watcherSyncWithDb = function*() {
  yield takeEvery(SYNC_WITH_DB, syncWithDb)
}

export default watcherSyncWithDb
