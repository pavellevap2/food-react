import { call, put, takeEvery, select } from 'redux-saga/effects'
import getVoteTime from '../managers/getVoteTime'
import { GET_VOTE_TIME_RANGE } from '../actions/voteParams'

const getVoteTimeSaga = function*() {
  const userToken = localStorage.getItem('userToken')
  const voteTime = yield call(getVoteTime, userToken)
  console.log(voteTime)
}

const watcherGetVoteTimeSaga = function*() {
  yield takeEvery(GET_VOTE_TIME_RANGE, getVoteTimeSaga)
}

export default watcherGetVoteTimeSaga
