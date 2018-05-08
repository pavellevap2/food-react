import { handleAction } from 'redux-actions'
import {
  SAVE_TIME_RANGE,
  CLEAR_VOTES,
  VOTE_ACTIVELY,
} from '../actions/voteData'
import { combineReducers } from 'redux'

const timeRange = handleAction(
  SAVE_TIME_RANGE,
  (state, { payload }) => payload,
  0,
)

const startingVotes = handleAction(
  CLEAR_VOTES,
  (state, { payload }) => payload,
  [],
)

const voteActively = handleAction(
  VOTE_ACTIVELY,
  (state, { payload }) => payload,
  false,
)

const voteData = combineReducers({
  timeRange,
  startingVotes,
  voteActively,
})

export default voteData
