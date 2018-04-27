import { handleAction } from 'redux-actions'
import {
  GET_IMAGES_DATA,
  GET_RESTAURAUNT_DATA,
} from '../actions/newRestauraunt'
import { combineReducers } from 'redux'

const imageData = handleAction(
  GET_IMAGES_DATA,
  (state, { payload }) => payload,
  '',
)

const restaurauntData = handleAction(
  GET_RESTAURAUNT_DATA,
  (state, { payload }) => payload,
  {},
)

const newRestauraunt = combineReducers({
  imageData,
  restaurauntData,
})

export default newRestauraunt
