import { put, call, select, takeEvery } from 'redux-saga/effects'
import { getRestData } from '../selectors/newRestauraunt'
import postNewRestData from '../managers/postNewRestData'
import { SUBMIT_REST_DATA } from '../actions/newRestauraunt'
import { history } from '../index'

const pushNewRestData = function*() {
  const restData = yield select(getRestData)
  const token = localStorage.getItem('userToken')
  yield call(postNewRestData, restData, token)
}

const watcherPushNewRestData = function*() {
  yield takeEvery(SUBMIT_REST_DATA, pushNewRestData)
}

export default watcherPushNewRestData
