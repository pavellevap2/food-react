import { put, call, select, takeEvery } from 'redux-saga/effects'
import { getUserData, getUserTokenId } from '../selectors/auth'
import { SYNC_WITH_DB, getDatabaseData } from '../actions/database'
import syncWithDataBase from '../managers/syncWithDataBase'

const syncWithDb = function*() {
  const userData = yield select(getUserData)
  const localStorageToken = localStorage.getItem('userToken')
  const savedToken = yield select(getUserTokenId)
  const token = userData.idToken || localStorageToken || savedToken
  const database = yield call(syncWithDataBase, token)
  yield put(getDatabaseData(database))
}

const watcherSyncWithDb = function*() {
  yield takeEvery(SYNC_WITH_DB, syncWithDb)
}

export default watcherSyncWithDb
