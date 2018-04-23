import { history } from '../index'
import { call, takeEvery } from 'redux-saga/effects'
import { SIGN_OUT } from '../actions/auth'

const signOutSaga = function*() {
  localStorage.removeItem('userToken')
  yield call(history.push, '/')
}

const watcherSignOutSaga = function*() {
  yield takeEvery(SIGN_OUT, signOutSaga)
}

export default watcherSignOutSaga
