import { handleAction } from 'redux-actions'
import {
  SAVE_TIME_RANGE,
  CLEAR_VOTES,
  SAVE_VOTES_TABLE,
  MAKE_VOTE,
  SHOW_VOTES_PRELOADER,
  SHOW_LIKE_PRELOADER,
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

const votesPreloader = handleAction(
  SHOW_VOTES_PRELOADER,
  (state, { payload }) => payload,
  false,
)

const likePreloader = handleAction(
  SHOW_LIKE_PRELOADER,
  (state, { payload }) => payload,
  -1,
)

const voteParams = handleAction(MAKE_VOTE, (state, { payload }) => payload, {})

const voteData = combineReducers({
  timeRange,
  startingVotes,
  votesTableData,
  voteParams,
  votesPreloader,
  likePreloader,
})

export default voteData
