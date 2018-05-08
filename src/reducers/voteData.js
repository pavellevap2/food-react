import { handleAction } from 'redux-actions'
import {
  SAVE_TIME_RANGE,
  CLEAR_VOTES,
  VOTE_ACTIVELY,
  SAVE_VOTES_TABLE,
  MAKE_VOTE,
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

const votesTableData = handleAction(
  SAVE_VOTES_TABLE,
  (state, { payload }) => payload,
  [],
)

const voteParams = handleAction(MAKE_VOTE, (state, { payload }) => payload, {})

const voteData = combineReducers({
  timeRange,
  startingVotes,
  votesTableData,
  voteParams,
})

export default voteData
