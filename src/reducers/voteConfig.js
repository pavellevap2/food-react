import { handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import { SHOW_VOTE_CONFIG } from '../actions/voteConfig'

const showVoteConfig = handleAction(
  SHOW_VOTE_CONFIG,
  (state, { payload }) => payload,
  false,
)

const voteConfig = combineReducers({
  showVoteConfig,
})

export default voteConfig
