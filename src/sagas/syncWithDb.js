import { put, call, select, takeEvery } from 'redux-saga/effects'
import { getUserData, getUserTokenId } from '../selectors/auth'
import {
  SYNC_WITH_DB,
  showPreloader,
  getRestarauntsData,
} from '../actions/restaraunts'
import syncWithDataBase from '../managers/syncWithDataBase'
import refreshUserData from '../managers/refreshUserData'
import { saveUserTokenId } from '../actions/auth'
import getVoteTime from '../managers/getVoteTime'
import getVotesData from '../managers/getVotesData'
import { saveVotesTable, saveTimeRange } from '../actions/voteData'

const syncWithDb = function*() {
  yield put(showPreloader(true))
  const userData = yield select(getUserData)
  const localStorageToken = localStorage.getItem('userToken')
  const savedToken = yield select(getUserTokenId)
  const token = localStorageToken || userData.idToken || savedToken
  const database = yield call(syncWithDataBase, token)

  const voteTime = yield call(getVoteTime, token)
  const voteData = yield call(getVotesData, token)

  if (!database.error) {
    yield put(getRestarauntsData(database))
    yield put(saveVotesTable(voteData))
    yield put(saveTimeRange(voteTime.time))
  } else {
    const refreshToken = localStorage.getItem('refreshToken')
    const refreshedUserData = yield call(refreshUserData, refreshToken)
    const refreshedUserToken = refreshedUserData.id_token

    yield put(saveUserTokenId(refreshedUserToken))
    localStorage.setItem('userToken', refreshedUserToken)

    const databaseWithRefresh = yield call(syncWithDataBase, refreshedUserToken)
    const refreshedVoteTime = yield call(getVoteTime, refreshedUserToken)
    const refreshedVoteData = yield call(getVotesData, refreshedUserToken)

    yield put(getRestarauntsData(databaseWithRefresh))
    yield put(saveTimeRange(refreshedVoteTime.time))
    yield put(saveVotesTable(refreshedVoteData))
  }

  yield put(showPreloader(false))
}

const watcherSyncWithDb = function*() {
  yield takeEvery(SYNC_WITH_DB, syncWithDb)
}

export default watcherSyncWithDb
