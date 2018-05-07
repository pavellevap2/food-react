import { createAction } from 'redux-actions'

export const GET_VOTE_TIME_RANGE = '@@VOTE_PARAMS/GET_VOTE_TIME_RANGE'
export const SAVE_TIME_RANGE = '@@VOTE_PARAMS/SAVE_TIME_RANGE'

export const getVoteTimeRange = createAction(GET_VOTE_TIME_RANGE)
export const saveTimeRange = createAction(SAVE_TIME_RANGE)
