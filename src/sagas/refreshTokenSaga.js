import { put, call } from 'redux-saga/effects'
import refreshUserData from '../managers/refreshUserData'
import { saveUserTokenId } from '../actions/auth'

const refreshTokenSaga = function*() {
  const refreshToken = localStorage.getItem('refreshToken')
  const refreshedUserData = yield call(refreshUserData, refreshToken)
  const refreshedUserToken = refreshedUserData.id_token
  yield put(saveUserTokenId(refreshedUserToken))
  localStorage.setItem('userToken', refreshedUserToken)
}

export default refreshTokenSaga
