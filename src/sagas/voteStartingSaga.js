import { put, select, takeEvery } from 'redux-saga/effects'
import { getNumberStartTime, getNumberEndTime } from '../selectors/voteConfig'
import {
  CHECK_VOTE_STATE,
  voteStarting,
  voteEnding,
} from '../actions/voteConfig'

const voteStartingSaga = function*() {
  const START_TIME = yield select(getNumberStartTime)
  const END_TIME = yield select(getNumberEndTime)
  const CURRENT_TIME = 1

  if (START_TIME >= CURRENT_TIME && START_TIME <= END_TIME) {
    console.log('здесь')
    yield put(voteStarting(true))
  } else if (END_TIME >= CURRENT_TIME) {
    yield put(voteEnding(true))
  }
}

const watcherVoteStartingSaga = function*() {
  yield takeEvery(CHECK_VOTE_STATE, voteStartingSaga)
}

export default watcherVoteStartingSaga
