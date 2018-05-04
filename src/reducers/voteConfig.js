import { handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  SHOW_VOTE_CONFIG,
  SELECT_START_TIME,
  SELECT_END_TIME,
} from '../actions/voteConfig'

const showVoteConfig = handleAction(
  SHOW_VOTE_CONFIG,
  (state, { payload }) => payload,
  false,
)

const startTime = handleAction(
  SELECT_START_TIME,
  (state, { payload }) => payload,
  '',
)

const endTime = handleAction(
  SELECT_END_TIME,
  (state, { payload }) => payload,
  '',
)

const voteConfig = combineReducers({
  showVoteConfig,
  startTime,
  endTime,
})

export default voteConfig
