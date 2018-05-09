import { call, put, select, takeEvery } from 'redux-saga/effects'
import changeVoteNumber from '../managers/changeVoteNumber'
import { MAKE_VOTE, saveVotesTable } from '../actions/voteData'
import { getVotePrams } from '../selectors/voteData'
import getVotesData from '../managers/getVotesData'

const makeVoteSaga = function*() {
  const token = localStorage.getItem('userToken')
  const votesTableData = yield call(getVotesData, token)
  yield put(saveVotesTable(votesTableData))

  const currentVoteData = yield select(getVotePrams)
  console.log(currentVoteData)

  const currentVoteValue = votesTableData[currentVoteData.index].vote
  const nextVote = currentVoteData.voteStatus
    ? currentVoteValue - 1
    : currentVoteValue + 1

  yield call(changeVoteNumber, token, currentVoteData.index, nextVote)

  const votesRefreshTableData = yield call(getVotesData, token)
  yield put(saveVotesTable(votesRefreshTableData))
}

const watcherMakeVoteSaga = function*() {
  yield takeEvery(MAKE_VOTE, makeVoteSaga)
}

export default watcherMakeVoteSaga
