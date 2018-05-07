import { call, put, takeEvery, select } from 'redux-saga/effects'
import { getTimeRange } from '../selectors/voteConfig'
import { START_VOTE, showVoteConfig } from '../actions/voteConfig'
import putVoteTime from '../managers/putVoteTIme'

const startVoteSaga = function*() {
  const timeRange = yield select(getTimeRange)
  const userToken = localStorage.getItem('userToken')
  yield call(putVoteTime, userToken, timeRange)
  yield put(showVoteConfig(false))
}

const watcherStartVoteSaga = function*() {
  yield takeEvery(START_VOTE, startVoteSaga)
}

export default watcherStartVoteSaga
