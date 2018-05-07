import { handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import { SHOW_VOTE_CONFIG, SELECT_TIME_RANGE } from '../actions/voteConfig'

const showVoteConfig = handleAction(
  SHOW_VOTE_CONFIG,
  (state, { payload }) => payload,
  false,
)

const timeRange = handleAction(
  SELECT_TIME_RANGE,
  (state, { payload }) => payload,
  '',
)

const voteConfig = combineReducers({
  showVoteConfig,
  timeRange,
})

export default voteConfig
