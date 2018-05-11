import { createAction } from 'redux-actions'

export const GET_RESTARAUNTS_DATA = '@@restaraunts/GET_RESTARAUNTS_DATA'
export const SYNC_WITH_DB = '@@restaraunts/SYNC_WITH_DB'
export const SHOW_PRELOADER = '@@restaraunts/SHOW_PRELOADER'

export const getRestarauntsData = createAction(GET_RESTARAUNTS_DATA)
export const syncWidthDB = createAction(SYNC_WITH_DB)

export const showPreloader = createAction(SHOW_PRELOADER)
