import { call, put, takeEvery, select } from 'redux-saga/effects'
import { START_VOTE, showVoteConfig } from '../actions/voteConfig'
import putVoteTime from '../managers/putVoteTIme'
import { saveTimeRange, saveVotesTable } from '../actions/voteData'
import { getRestauraunts } from '../selectors/restauraunts'
import startVote from '../managers/startVote'
import { getVoteEndingTime } from '../selectors/voteData'
import refreshTokenSaga from './refreshTokenSaga'

const startVoteSaga = function*() {
  const timeRange = yield select(getVoteEndingTime)
  const token = localStorage.getItem('userToken')
  const updateVoteTime = yield call(putVoteTime, token, timeRange)

  if (updateVoteTime.error || !updateVoteTime) {
    yield call(refreshTokenSaga)
    const refreshedToken = localStorage.getItem('userToken')
    yield call(putVoteTime, refreshedToken, timeRange)
  }

  const usefullToken = localStorage.getItem('userToken')
  yield put(saveTimeRange(timeRange))
  const currentRestauraunts = yield select(getRestauraunts)
  const restaurauntsVotes = currentRestauraunts.map(({ key, name }) => ({
    key: key,
    name: name,
    vote: [],
  }))

  yield call(startVote, usefullToken, restaurauntsVotes)
  yield put(saveVotesTable(restaurauntsVotes))
  yield put(showVoteConfig(false))
}

const watcherStartVoteSaga = function*() {
  yield takeEvery(START_VOTE, startVoteSaga)
}

export default watcherStartVoteSaga
