import { call, put, takeEvery } from 'redux-saga/effects'
import getVotesData from '../managers/getVotesData'
import {
  TAKE_VOTES_TABLE,
  saveVotesTable,
  saveTimeRange,
} from '../actions/voteData'
import getVoteTime from '../managers/getVoteTime'
import refreshUserData from '../managers/refreshUserData'
import { saveUserTokenId } from '../actions/auth'

const getVotesTable = function*() {
  const userToken = localStorage.getItem('userToken')
  const voteTime = yield call(getVoteTime, userToken)
  const votesData = yield call(getVotesData, userToken)

  if (!votesData.error && !voteTime.error) {
    yield put(saveVotesTable(votesData))
    yield put(saveTimeRange(voteTime.time))
  } else {
    console.log('ошибка с ключом в getVotesTableSaga')
    const refreshToken = localStorage.getItem('refreshToken')
    const refreshedUserData = yield call(refreshUserData, refreshToken)
    const refreshedUserToken = refreshedUserData.id_token
    yield put(saveUserTokenId(refreshedUserToken))
    localStorage.setItem('userToken', refreshedUserToken)

    const refreshedVotesData = yield call(getVotesData, refreshedUserToken)
    const refreshedVoteTime = yield call(getVoteTime, refreshedUserToken)

    yield put(saveVotesTable(refreshedVotesData))
    yield put(saveTimeRange(refreshedVoteTime.time))
  }
}

const watcherGetVotesTable = function*() {
  yield takeEvery(TAKE_VOTES_TABLE, getVotesTable)
}

export default watcherGetVotesTable
