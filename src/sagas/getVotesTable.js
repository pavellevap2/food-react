import { call, put, takeEvery } from 'redux-saga/effects'
import getVotesData from '../managers/getVotesData'
import { TAKE_VOTES_TABLE } from '../actions/voteData'

const getVotesTable = function*() {
  const token = localStorage.getItem('userToken')
  const votesData = yield call(getVotesData, token)
}

const watcherGetVotesTable = function*() {
  yield takeEvery(TAKE_VOTES_TABLE, getVotesTable)
}

export default watcherGetVotesTable
