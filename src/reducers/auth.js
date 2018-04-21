import { handleAction, handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  TAKE_USER_DATA,
  TAKE_USER_NAME,
  TAKE_USER_EMAIL,
  TAKE_USER_PASSWORD,
  CLEAR_FORM_DATA,
  AUTH_ERROR,
} from '../actions/auth'

const userData = handleAction(
  TAKE_USER_DATA,
  (state, { payload }) => payload,
  {},
)

const userName = handleAction(
  TAKE_USER_NAME,
  (state, { payload }) => payload,
  '',
)

const authError = handleAction(AUTH_ERROR, (state, { payload }) => payload, '')

const userEmail = handleActions(
  {
    [TAKE_USER_EMAIL]: (state, { payload }) => payload,
    [CLEAR_FORM_DATA]: (state, { payload }) => '',
  },
  '',
)

const userPassword = handleActions(
  {
    [TAKE_USER_PASSWORD]: (state, { payload }) => payload,
    [CLEAR_FORM_DATA]: (state, { payload }) => '',
  },
  '',
)

const auth = combineReducers({
  userData,
  userName,
  userEmail,
  userPassword,
  authError,
})

export default auth
