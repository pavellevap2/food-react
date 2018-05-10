import { call, put, select, takeEvery } from 'redux-saga/effects'
import changeVoteNumber from '../managers/changeVoteNumber'
import { MAKE_VOTE, saveVotesTable } from '../actions/voteData'
import { getVotePrams } from '../selectors/voteData'
import getVotesData from '../managers/getVotesData'
import startVote from '../managers/startVote'

const makeVoteSaga = function*() {
  const token = localStorage.getItem('userToken')
  const votesTableData = yield call(getVotesData, token)
  yield put(saveVotesTable(votesTableData))

  const currentVoteData = yield select(getVotePrams)

  const currentVoteValue = votesTableData[currentVoteData.index].vote
  const userEmail = localStorage.getItem('email')
  const currIndex = currentVoteData.index

  const nextVote = currentVoteData.voteStatus
    ? currentVoteValue.filter((x, i) => x !== userEmail)
    : [...currentVoteValue, userEmail]

  yield call(changeVoteNumber, token, currIndex, nextVote)

  const votesRefreshTableData = yield call(getVotesData, token)

  const usefullVotesTable = votesRefreshTableData.map(
    x => (!x.vote ? { ...x, vote: 0 } : x),
  )

  yield call(startVote, token, usefullVotesTable)
  yield put(saveVotesTable(usefullVotesTable))
}

const watcherMakeVoteSaga = function*() {
  yield takeEvery(MAKE_VOTE, makeVoteSaga)
}

export default watcherMakeVoteSaga
