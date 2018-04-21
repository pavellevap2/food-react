import { call, takeEvery } from 'redux-saga/effects'
import { history } from '../index'
import { TO_HOMEPAGE } from '../actions/auth'

const toHomePage = function*() {
  const userToken = yield localStorage.getItem('userToken')
  if (userToken) {
    yield call(history.push, '/home')
  }
}

const watcherToHomePage = function*() {
  yield takeEvery(TO_HOMEPAGE, toHomePage)
}

export default watcherToHomePage
