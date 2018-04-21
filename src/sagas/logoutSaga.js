import { history } from '../index'
import { call, takeEvery } from 'redux-saga/effects'
import { LOGOUT } from '../actions/auth'

const logoutSaga = function*() {
  yield localStorage.removeItem('userToken')
  yield call(history.push, '/')
}

const watcherLogoutSaga = function*() {
  yield takeEvery(LOGOUT, logoutSaga)
}

export default watcherLogoutSaga
