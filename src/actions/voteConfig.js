import { createAction } from 'redux-actions'

export const SHOW_VOTE_CONFIG = '@@VOTE_CONFIG/SHOW_VOTE_CONFIG'

export const SELECT_START_TIME = '@@VOTE_CONFIG/SELECT_START_TIME'
export const SELECT_END_TIME = '@@VOTE_CONFIG/SELECT_END_TIME'

export const showVoteConfig = createAction(SHOW_VOTE_CONFIG)

export const selectStartTime = createAction(SELECT_START_TIME)
export const selectEndTime = createAction(SELECT_END_TIME)
