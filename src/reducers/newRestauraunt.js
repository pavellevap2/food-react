import { handleAction } from 'redux-actions'
import { GET_IMAGES_DATA } from '../actions/newRestauraunt'
import { combineReducers } from 'redux'

const imageData = handleAction(
  GET_IMAGES_DATA,
  (state, { payload }) => payload,
  '',
)

const newRestauraunt = combineReducers({
  imageData,
})

export default newRestauraunt
