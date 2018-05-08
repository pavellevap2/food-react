import { createAction } from 'redux-actions'

export const GET_VOTE_TIME_RANGE = '@@VOTE_DATA/GET_VOTE_TIME_RANGE'
export const SAVE_TIME_RANGE = '@@VOTE_DATA/SAVE_TIME_RANGE'
export const VOTE_ACTIVELY = '@@VOTE_DATA/VOTE_ACTIVELY'
export const CLEAR_VOTES = '@@VOTE_CONFIG/CLEAR_VOTES'

export const getVoteTimeRange = createAction(GET_VOTE_TIME_RANGE)
export const saveTimeRange = createAction(SAVE_TIME_RANGE)
export const voteActively = createAction(VOTE_ACTIVELY)
export const clearVotes = createAction(CLEAR_VOTES)
