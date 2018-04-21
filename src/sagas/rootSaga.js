import { all, call } from 'redux-saga/effects'
import watcherLoginSaga from './loginSaga'
import watcherSyncWithDb from './syncWithDb'
import watcherSignUp from './signUpSaga'
import watcherToHomePage from './toHomePage'
import watcherLogoutSaga from './logoutSaga'

const RootSaga = function*() {
  yield all([
    call(watcherLoginSaga),
    call(watcherSyncWithDb),
    call(watcherSignUp),
    call(watcherToHomePage),
    call(watcherLogoutSaga),
  ])
}

export default RootSaga
