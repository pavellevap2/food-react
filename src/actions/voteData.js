import { createAction } from 'redux-actions'

export const SAVE_TIME_RANGE = '@@VOTE_DATA/SAVE_TIME_RANGE'
export const CLEAR_VOTES = '@@VOTE_DATA/CLEAR_VOTES'
export const TAKE_VOTES_TABLE = '@@VOTE_DATA/TAKE_VOTES_TABLE'
export const SAVE_VOTES_TABLE = '@@VOTE_DATA/SAVE_VOTES_TABLE'
export const MAKE_VOTE = '@@VOTE_DATA/MAKE_VOTE'

export const saveTimeRange = createAction(SAVE_TIME_RANGE)
export const clearVotes = createAction(CLEAR_VOTES)
export const takeVotesTable = createAction(TAKE_VOTES_TABLE)
export const saveVotesTable = createAction(SAVE_VOTES_TABLE)
export const makeVote = createAction(MAKE_VOTE)
