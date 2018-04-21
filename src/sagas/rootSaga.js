import { all, call } from 'redux-saga/effects'
import watcherLoginSaga from './loginSaga'
import watcherSyncWithDb from './syncWithDb'

const RootSaga = function*() {
  yield all([call(watcherLoginSaga), call(watcherSyncWithDb)])
}

export default RootSaga
