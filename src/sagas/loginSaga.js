import loginWithEmail from '../managers/loginWithEmail'
import { put, call, select, takeEvery } from 'redux-saga/effects'
import { SUBMIT_LOGIN_USER, takeUserData, authError } from '../actions/auth'
import { getUserPassword, getUserEmail } from '../selectors/auth'
import { history } from '../index'
import * as R from 'ramda'

const LoginSaga = function*() {
  const password = yield select(getUserPassword)
  const email = yield select(getUserEmail)
  const userData = yield call(loginWithEmail, email, password)
  const error = R.path(['error', 'message'], userData)
  if (error === undefined) {
    yield put(takeUserData(userData))
    yield call(history.push, '/home')
  } else {
    yield put(authError(error))
  }
}

const watcherLoginSaga = function*() {
  yield takeEvery(SUBMIT_LOGIN_USER, LoginSaga)
}

export default watcherLoginSaga
