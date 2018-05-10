import { createAction } from 'redux-actions'

export const SHOW_VOTE_CONFIG = '@@VOTE_CONFIG/SHOW_VOTE_CONFIG'
export const SELECT_TIME_RANGE = '@@VOTE_CONFIG/SELECT_START_TIME'
export const START_VOTE = '@@VOTE_CONFIG/START_VOTE'

export const showVoteConfig = createAction(SHOW_VOTE_CONFIG)
export const selectTimeRange = createAction(SELECT_TIME_RANGE)
export const startVote = createAction(START_VOTE)
