import { call, put, takeEvery, select } from 'redux-saga/effects'
import getVoteTime from '../managers/getVoteTime'

const getVoteTimeSaga = function*() {
  const userToken = localStorage.getItem('userToken')
  const voteTime = yield call(getVoteTime, userToken)
  console.log(voteTime)
}

const watcherGetVoteTimeSaga = function() {}
