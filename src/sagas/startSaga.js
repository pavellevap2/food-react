import { put } from 'redux-saga/effects'
import { saveUserTokenId } from '../actions/auth'

const startSaga = function*() {
  const localStorageToken = localStorage.getItem('userToken')
  yield put(saveUserTokenId(localStorageToken))
}

export default startSaga
