import { createAction } from 'redux-actions'

export const TAKE_USER_DATA = '@@AUTH/GET_USER_DATA'
export const TAKE_USER_NAME = '@@AUTH/GET_USER_NAME'
export const TAKE_USER_EMAIL = '@@AUTH/TAKE_USER_EMAIL'
export const TAKE_USER_PASSWORD = '@@AUTH/TAKE_USER_PASSWORD'
export const CLEAR_FORM_DATA = '@@AUTH/CLEAR_FORM_DATA'

export const SUBMIT_LOGIN_USER = '@@AUTH/SUBMIT_LOGIN_USER'

export const takeUserData = createAction(TAKE_USER_DATA)
export const takeUserName = createAction(TAKE_USER_NAME)

export const clearFormData = createAction(CLEAR_FORM_DATA)

export const takeUserEmail = createAction(TAKE_USER_EMAIL)
export const takeUserPassword = createAction(TAKE_USER_PASSWORD)
