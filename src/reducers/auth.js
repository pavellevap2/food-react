import { handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import { TAKE_USER_DATA, TAKE_USER_NAME } from '../actions/auth'

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

const auth = combineReducers({
  userData,
  userName,
})

export default auth
