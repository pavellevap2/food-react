import { put, select, takeEvery } from 'redux-saga/effects'
import { getNumberStartTime, getNumberEndTime } from '../selectors/voteConfig'
import {
  CHECK_VOTE_STATE,
  voteStarting,
  voteEnding,
} from '../actions/voteConfig'

const voteStartingSaga = function*() {
  const startTime = yield select(getNumberStartTime)
  const endTime = yield select(getNumberEndTime)
  const currentTime = new Date().getHours()

  if (startTime >= currentTime && startTime <= endTime) {
    yield put(voteStarting(true))
  } else if (endTime >= currentTime) {
    yield put(voteEnding(true))
  }
  console.log(startTime, endTime)
}

const watcherVoteStartingSaga = function*() {
  yield takeEvery(CHECK_VOTE_STATE, voteStartingSaga)
}

export default watcherVoteStartingSaga
