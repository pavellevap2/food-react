import { createAction } from 'redux-actions'

export const TAKE_USER_DATA = '@@AUTH/GET_USER_DATA'
export const TAKE_USER_NAME = '@@AUTH/GET_USER_NAME'

export const takeUserData = createAction(TAKE_USER_DATA)
export const takeUserName = createAction(TAKE_USER_NAME)
