import { all, call } from 'redux-saga/effects'
import watcherLoginSaga from './loginSaga'
import watcherSyncWithDb from './syncWithDb'
import watcherSignUp from './signUpSaga'

const RootSaga = function*() {
  yield all([
    call(watcherLoginSaga),
    call(watcherSyncWithDb),
    call(watcherSignUp),
  ])
}

export default RootSaga
