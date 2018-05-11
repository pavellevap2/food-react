import { call, select, takeEvery, put, all } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getRestData } from '../selectors/newRestauraunt'
import postNewRestData from '../managers/postNewRestData'
import { SUBMIT_REST_DATA, showFinalCard } from '../actions/newRestauraunt'
import syncWithDataBase from '../managers/syncWithDataBase'
import getVotesData from '../managers/getVotesData'
import startVote from '../managers/startVote'
import { saveVotesTable } from '../actions/voteData'
import { history } from '../index'

const pushNewRestData = function*() {
  yield put(showFinalCard(true))
  const restData = yield select(getRestData)
  const token = localStorage.getItem('userToken')
  yield call(postNewRestData, restData, token)
  const currentRestaraunts = yield call(syncWithDataBase, token)

  const newVoteData = currentRestaraunts.find(x => x.name === restData.name)
  const votesTableData = yield call(getVotesData, token)
  const selectedVoteData = { key: newVoteData.key, name: newVoteData.name }
  const newVotesData = votesTableData.concat(selectedVoteData)
  yield call(startVote, token, newVotesData)

  const currVotesData = yield call(getVotesData, token)
  yield put(saveVotesTable(currVotesData))
  yield delay(500)
  yield all([put(showFinalCard(false)), call(history.push, '/')])
}

const watcherPushNewRestData = function*() {
  yield takeEvery(SUBMIT_REST_DATA, pushNewRestData)
}

export default watcherPushNewRestData
