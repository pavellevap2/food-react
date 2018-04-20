import { all, call } from 'redux-saga/effects'
import watcherLoginSaga from './loginSaga'

const RootSaga = function*() {
  yield all([call(watcherLoginSaga)])
}

export default RootSaga
