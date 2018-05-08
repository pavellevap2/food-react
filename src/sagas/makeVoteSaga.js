import { call, put, select, takeEvery } from 'redux-saga/effects'
import changeVoteNumber from '../managers/changeVoteNumber'
import { MAKE_VOTE, saveVotesTable } from '../actions/voteData'
import { getVotePrams } from '../selectors/voteData'
import getVotesData from '../managers/getVotesData'

const makeVoteSaga = function*() {
  const token = localStorage.getItem('userToken')
  const data = yield select(getVotePrams)
  yield call(changeVoteNumber, token, data.index, data.vote)
  const votesTableData = yield call(getVotesData, token)
  yield put(saveVotesTable(votesTableData))
}

const watcherMakeVoteSaga = function*() {
  yield takeEvery(MAKE_VOTE, makeVoteSaga)
}

export default watcherMakeVoteSaga
