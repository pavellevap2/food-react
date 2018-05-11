import { handleAction } from 'redux-actions'
import { GET_RESTARAUNTS_DATA, SHOW_PRELOADER } from '../actions/restaraunts'
import { combineReducers } from 'redux'

const restauraunts = handleAction(
  GET_RESTARAUNTS_DATA,
  (state, { payload }) => payload,
  [],
)

const preloader = handleAction(
  SHOW_PRELOADER,
  (state, { payload }) => payload,
  false,
)

const restaurauntsData = combineReducers({
  restauraunts,
  preloader,
})

export default restaurauntsData
