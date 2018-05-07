import { handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  SHOW_VOTE_CONFIG,
  SELECT_START_TIME,
  SELECT_END_TIME,
  VOTE_STARTING,
  VOTE_ENDING,
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

const voteConfig = combineReducers({
  showVoteConfig,
  startTime,
})

export default voteConfig
