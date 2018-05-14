import { call, put, select, takeEvery } from 'redux-saga/effects'
import changeVoteNumber from '../managers/changeVoteNumber'
import {
  MAKE_VOTE,
  saveVotesTable,
  showVotesPreloader,
  showLikePreloader,
} from '../actions/voteData'
import { getVotePrams, getVotesFromDb } from '../selectors/voteData'
import getVotesData from '../managers/getVotesData'
import refreshTokenSaga from './refreshTokenSaga'

const makeVoteSaga = function*() {
  yield put(showVotesPreloader(true))
  const token = localStorage.getItem('userToken')
  const votesTableData = yield call(getVotesData, token)

  if (!votesTableData || votesTableData.error) {
    yield call(refreshTokenSaga)
    const refreshedToken = localStorage.getItem('userToken')
    const refreshedVotesData = yield call(getVotesData, refreshedToken)
    yield put(saveVotesTable(refreshedVotesData))
    yield call(voteSaga)
  } else {
    yield put(saveVotesTable(votesTableData))
    yield call(voteSaga)
  }
}

const voteSaga = function*() {
  const token = localStorage.getItem('userToken')
  const votesTableData = yield select(getVotesFromDb)
  const currentVoteData = yield select(getVotePrams)
  const currIndex = currentVoteData.index
  yield put(showLikePreloader(currIndex))
  const currentVoteValue = votesTableData[currIndex].vote
  const userId = localStorage.getItem('userId')

  const nextVote = currentVoteData.voteStatus
    ? currentVoteValue.filter((x, i) => x !== userId)
    : [...currentVoteValue, userId]
  yield call(changeVoteNumber, token, currIndex, nextVote)

  const votesRefreshTableData = yield call(getVotesData, token)
  const usefullVotesTable = votesRefreshTableData.map(
    x => (!x.vote ? { ...x, vote: 0 } : x),
  )
  yield put(saveVotesTable(usefullVotesTable))
  yield put(showVotesPreloader(false))
  yield put(showLikePreloader(-1))
}

const watcherMakeVoteSaga = function*() {
  yield takeEvery(MAKE_VOTE, makeVoteSaga)
}

export default watcherMakeVoteSaga
