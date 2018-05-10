import { handleAction } from 'redux-actions'
import {
  GET_IMAGES_DATA,
  GET_RESTAURAUNT_DATA,
  SHOW_NEW_RESTARAUNT_POPUP,
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

const showPopup = handleAction(
  SHOW_NEW_RESTARAUNT_POPUP,
  (state, { payload }) => payload,
  false,
)

const newRestauraunt = combineReducers({
  imageData,
  restaurauntData,
  showPopup,
})

export default newRestauraunt
