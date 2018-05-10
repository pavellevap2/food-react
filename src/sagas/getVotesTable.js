import { call, put, takeEvery } from 'redux-saga/effects'
import getVotesData from '../managers/getVotesData'
import { TAKE_VOTES_TABLE, saveVotesTable } from '../actions/voteData'

const getVotesTable = function*() {
  const token = localStorage.getItem('userToken')
  const votesTableData = yield call(getVotesData, token)
  yield put(saveVotesTable(votesTableData))
}

const watcherGetVotesTable = function*() {
  yield takeEvery(TAKE_VOTES_TABLE, getVotesTable)
}

export default watcherGetVotesTable
