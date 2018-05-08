import { call, put, takeEvery } from 'redux-saga/effects'
import getVoteTime from '../managers/getVoteTime'
import { GET_VOTE_TIME_RANGE, saveTimeRange } from '../actions/voteData'

const getVoteTimeRangeSaga = function*() {
  const userToken = localStorage.getItem('userToken')
  const voteTime = yield call(getVoteTime, userToken)
  yield put(saveTimeRange(voteTime.time))
}

const watcherGetVoteTimeRangeSaga = function*() {
  yield takeEvery(GET_VOTE_TIME_RANGE, getVoteTimeRangeSaga)
}

export default watcherGetVoteTimeRangeSaga
