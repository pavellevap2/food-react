import { put, call, select, takeEvery } from 'redux-saga/effects'
import { getUserData } from '../selectors/auth'
import { SYNC_WITH_DB, getDatabaseData } from '../actions/database'
import syncWithDataBase from '../managers/syncWithDataBase'

const syncWithDb = function*() {
  const userData = yield select(getUserData)
  const token = yield userData.idToken
  const database = yield call(syncWithDataBase, token)
  yield put(getDatabaseData(database))
}

const watcherSyncWithDb = function*() {
  yield takeEvery(SYNC_WITH_DB, syncWithDb)
}

export default watcherSyncWithDb
