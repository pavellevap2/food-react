import { createAction } from 'redux-actions'

export const TAKE_USER_DATA = '@@AUTH/GET_USER_DATA'
export const TAKE_USER_EMAIL = '@@AUTH/TAKE_USER_EMAIL'
export const TAKE_USER_PASSWORD = '@@AUTH/TAKE_USER_PASSWORD'
export const CLEAR_FORM_DATA = '@@AUTH/CLEAR_FORM_DATA'
export const SUBMIT_SIGNUP_USER = '@@AUTH/SUBMIT_SIGNUP_USER'
export const TO_HOMEPAGE = '@@AUTH/TO_HOMEPAGE'
export const SIGN_OUT = '@@AUTH/SIGN_OUT'
export const SAVE_USER_TOKEN_ID = '@@AUTH/SAVE_USER_TOKEN_ID'

export const SUBMIT_LOGIN_USER = '@@AUTH/SUBMIT_LOGIN_USER'
export const AUTH_ERROR = '@@AUTH/AUTH_ERROR'

export const takeUserData = createAction(TAKE_USER_DATA)

export const submitLoginUser = createAction(SUBMIT_LOGIN_USER)
export const submitSignupUser = createAction(SUBMIT_SIGNUP_USER)

export const clearFormData = createAction(CLEAR_FORM_DATA)
export const authError = createAction(AUTH_ERROR)

export const takeUserEmail = createAction(TAKE_USER_EMAIL)
export const takeUserPassword = createAction(TAKE_USER_PASSWORD)

export const toHomePage = createAction(TO_HOMEPAGE)
export const signOut = createAction(SIGN_OUT)

export const saveUserTokenId = createAction(SAVE_USER_TOKEN_ID)
