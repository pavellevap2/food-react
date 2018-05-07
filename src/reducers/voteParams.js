import { handleAction } from 'redux-actions'
import { SAVE_TIME_RANGE } from '../actions/voteParams'
import { combineReducers } from 'redux'

const timeRange = handleAction(
  SAVE_TIME_RANGE,
  (state, { payload }) => payload,
  0,
)

const voteParams = combineReducers({
  timeRange,
})

export default voteParams
