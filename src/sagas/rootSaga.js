import { all, call } from 'redux-saga/effects'
import watcherLoginSaga from './loginSaga'
import watcherSyncWithDb from './syncWithDb'
import watcherSignUp from './signUpSaga'
import watcherSignOutSaga from './signoutSaga'
import startSaga from './startSaga'

const RootSaga = function*() {
  yield all([
    call(startSaga),
    call(watcherLoginSaga),
    call(watcherSyncWithDb),
    call(watcherSignUp),
    call(watcherSignOutSaga),
  ])
}

export default RootSaga
