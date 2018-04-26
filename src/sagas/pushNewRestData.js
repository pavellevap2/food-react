import { put, call, select, takeEvery } from 'redux-saga/effects'
import { getRestData } from '../selectors/newRestauraunt'
import postNewRestData from '../managers/postNewRestData'
import { SUBMIT_REST_DATA } from '../actions/newRestauraunt'

const pushNewRestData = function*() {
  const restData = yield select(getRestData)
  const token = localStorage.getItem('userToken')
  console.log('data', restData, token)
  yield call(postNewRestData, restData, token)
}

const watcherPushNewRestData = function*() {
  yield takeEvery(SUBMIT_REST_DATA, pushNewRestData)
}

export default watcherPushNewRestData
