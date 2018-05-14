import { call, put, takeEvery, select } from 'redux-saga/effects'
import { START_VOTE, showVoteConfig } from '../actions/voteConfig'
import putVoteTime from '../managers/putVoteTIme'
import { saveTimeRange, saveVotesTable } from '../actions/voteData'
import { getRestauraunts } from '../selectors/restauraunts'
import startVote from '../managers/startVote'
import { getVoteEndingTime } from '../selectors/voteData'

const startVoteSaga = function*() {
  const timeRange = yield select(getVoteEndingTime)
  const userToken = localStorage.getItem('userToken')
  yield call(putVoteTime, userToken, timeRange)
  yield put(saveTimeRange(timeRange))
  const currentRestauraunts = yield select(getRestauraunts)
  const restaurauntsVotes = currentRestauraunts.map(({ key, name }) => ({
    key: key,
    name: name,
    vote: [],
  }))
  yield call(startVote, userToken, restaurauntsVotes)
  yield put(saveVotesTable(restaurauntsVotes))
  yield put(showVoteConfig(false))
}

const watcherStartVoteSaga = function*() {
  yield takeEvery(START_VOTE, startVoteSaga)
}

export default watcherStartVoteSaga
