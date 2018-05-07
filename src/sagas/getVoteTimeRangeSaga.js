import { call, put, takeEvery, select } from 'redux-saga/effects'
import getVoteTime from '../managers/getVoteTime'
import { GET_VOTE_TIME_RANGE, saveTimeRange } from '../actions/voteParams'

const getVoteTimeRangeSaga = function*() {
  const userToken = localStorage.getItem('userToken')
  const voteTime = yield call(getVoteTime, userToken)
  yield put(saveTimeRange(voteTime))
}

const watcherGetVoteTimeRangeSaga = function*() {
  yield takeEvery(GET_VOTE_TIME_RANGE, getVoteTimeRangeSaga)
}

export default watcherGetVoteTimeRangeSaga
