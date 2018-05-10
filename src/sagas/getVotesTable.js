import { call, put, takeEvery } from 'redux-saga/effects'
import getVotesData from '../managers/getVotesData'
import {
  TAKE_VOTES_TABLE,
  saveVotesTable,
  saveTimeRange,
} from '../actions/voteData'
import getVoteTime from '../managers/getVoteTime'

const getVotesTable = function*() {
  const userToken = localStorage.getItem('userToken')
  const voteTime = yield call(getVoteTime, userToken)

  yield put(saveTimeRange(voteTime.time))
  const votesTableData = yield call(getVotesData, userToken)
  yield put(saveVotesTable(votesTableData))
}

const watcherGetVotesTable = function*() {
  yield takeEvery(TAKE_VOTES_TABLE, getVotesTable)
}

export default watcherGetVotesTable
