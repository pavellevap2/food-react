import { createAction } from 'redux-actions'

export const GET_DB_DATA = '@@database/GET_DB_DATA'
export const SYNC_WITH_DB = '@@database/SYNC_WITH_DB'
export const SHOW_PRELOADER = '@@database/SHOW_PRELOADER'

export const getDatabaseData = createAction(GET_DB_DATA)
export const syncWithDb = createAction(SYNC_WITH_DB)

export const showPreloader = createAction(SHOW_PRELOADER)
