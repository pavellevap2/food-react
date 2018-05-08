import { call, put, takeEvery, select } from 'redux-saga/effects'
import { getTimeRange } from '../selectors/voteConfig'
import { START_VOTE, showVoteConfig } from '../actions/voteConfig'
import putVoteTime from '../managers/putVoteTIme'
import {
  saveTimeRange,
  voteActively,
  saveVotesTable,
} from '../actions/voteData'
import { getRestauraunts } from '../selectors/restauraunts'
import startVote from '../managers/startVote'
import { getVoteEndingTime } from '../selectors/voteData'

const startVoteSaga = function*() {
  const timeRange = yield select(getVoteEndingTime)
  const userToken = localStorage.getItem('userToken')
  yield call(putVoteTime, userToken, timeRange)
  yield put(saveTimeRange(timeRange))
  yield put(showVoteConfig(false))
  const currentRestauraunts = yield select(getRestauraunts)
  const restaurauntsVotes = currentRestauraunts.map(x => ({
    key: x.key,
    name: x.name,
    vote: 0,
  }))
  yield call(startVote, userToken, restaurauntsVotes)

  yield put(saveVotesTable(restaurauntsVotes))
}

const watcherStartVoteSaga = function*() {
  yield takeEvery(START_VOTE, startVoteSaga)
}

export default watcherStartVoteSaga
