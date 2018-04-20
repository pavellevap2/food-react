import loginWithEmail from '../managers/loginWithEmail'
import { put, call, select, takeEvery } from 'redux-saga/effects'
import { SUBMIT_LOGIN_USER } from '../actions/auth'

const LoginSaga = function*() {}

const watcherLoginSaga = function*() {
  yield takeEvery(SUBMIT_LOGIN_USER, LoginSaga)
}

export default watcherLoginSaga
