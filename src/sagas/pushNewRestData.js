import { call, select, takeEvery, put } from 'redux-saga/effects'
import { getRestData } from '../selectors/newRestauraunt'
import postNewRestData from '../managers/postNewRestData'
import { SUBMIT_REST_DATA } from '../actions/newRestauraunt'
import syncWithDataBase from '../managers/syncWithDataBase'
import { getVotesTableData } from '../selectors/voteData'
import getVotesData from '../managers/getVotesData'
import startVote from '../managers/startVote'
import { saveVotesTable } from '../actions/voteData'

const pushNewRestData = function*() {
  const restData = yield select(getRestData)

  const token = localStorage.getItem('userToken')
  const newRestData = yield call(postNewRestData, restData, token)

  const databaseWithRefresh = yield call(syncWithDataBase, token)

  const newVoteData = databaseWithRefresh.find(x => x.name === restData.name)

  const votesTableData = yield call(getVotesData, token)
  const selectedVoteData = { key: newVoteData.key, name: newVoteData.name }
  const newVotesData = votesTableData.concat(selectedVoteData)
  yield call(startVote, token, newVotesData)

  const refreshedData = yield call(getVotesData, token)
  console.log(refreshedData)
  yield put(saveVotesTable(refreshedData))
}

const watcherPushNewRestData = function*() {
  yield takeEvery(SUBMIT_REST_DATA, pushNewRestData)
}

export default watcherPushNewRestData
