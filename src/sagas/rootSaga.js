import { all, call } from 'redux-saga/effects'
import watcherLoginSaga from './loginSaga'
import watcherSyncWithDb from './syncWithDb'
import watcherSignUp from './signUpSaga'
import watcherSignOutSaga from './signoutSaga'
import startSaga from './startSaga'
import watcherPushNewRestData from './pushNewRestData'
import watcherGetVoteTimeRangeSaga from './getVoteTimeRangeSaga'
import watcherStartVoteSaga from './startVoteSaga'
import watcherGetVotesTable from './getVotesTable'

const RootSaga = function*() {
  yield all([
    call(startSaga),
    call(watcherLoginSaga),
    call(watcherSyncWithDb),
    call(watcherSignUp),
    call(watcherSignOutSaga),
    call(watcherPushNewRestData),
    call(watcherGetVoteTimeRangeSaga),
    call(watcherStartVoteSaga),
    call(watcherGetVotesTable),
  ])
}

export default RootSaga
