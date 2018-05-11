import { call, put, select, takeEvery } from 'redux-saga/effects'
import { getUserEmail, getUserPassword } from '../selectors/auth'
import signUpWithEmail from '../managers/signUpWithEmail'
import {
  SUBMIT_SIGNUP_USER,
  takeUserData,
  authError,
  saveUserTokenId,
  clearFormData,
} from '../actions/auth'
import { history } from '../index'
import * as R from 'ramda'

const signUp = function*() {
  const email = yield select(getUserEmail)
  const password = yield select(getUserPassword)
  const userAuthData = yield call(signUpWithEmail, email, password)
  const error = R.path(['error', 'message'], userAuthData)

  if (error === undefined) {
    yield put(takeUserData(userAuthData))
    yield put(saveUserTokenId(userAuthData.idToken))
    localStorage.setItem('userToken', userAuthData.idToken)
    localStorage.setItem('userId', userAuthData.localId)
    localStorage.setItem('refreshToken', userAuthData.refreshToken)
    yield put(clearFormData())

    yield call(history.push, '/')
  } else {
    yield put(authError(error))
  }
}

const watcherSignUp = function*() {
  yield takeEvery(SUBMIT_SIGNUP_USER, signUp)
}

export default watcherSignUp
