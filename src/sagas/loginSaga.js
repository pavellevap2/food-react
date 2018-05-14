import loginWithEmail from '../managers/loginWithEmail'
import { put, call, select, takeEvery } from 'redux-saga/effects'
import {
  SUBMIT_LOGIN_USER,
  takeUserData,
  authError,
  clearFormData,
} from '../actions/auth'
import { getUserPassword, getUserEmail } from '../selectors/auth'
import { history } from '../index'
import * as R from 'ramda'
import { saveUserTokenId } from '../actions/auth'

const loginSaga = function*() {
  const password = yield select(getUserPassword)
  const email = yield select(getUserEmail)
  const userAuthData = yield call(loginWithEmail, email, password)
  const error = R.path(['error', 'message'], userAuthData)

  if (error === undefined) {
    yield put(takeUserData(userAuthData))
    yield put(saveUserTokenId(userAuthData.idToken))
    localStorage.setItem('refreshToken', userAuthData.refreshToken)

    localStorage.setItem('userToken', userAuthData.idToken)
    localStorage.setItem('userId', userAuthData.localId)
    yield put(clearFormData())
    yield call(history.push, '/')
  } else {
    yield put(authError(error))
  }
}

const watcherLoginSaga = function*() {
  yield takeEvery(SUBMIT_LOGIN_USER, loginSaga)
}

export default watcherLoginSaga
