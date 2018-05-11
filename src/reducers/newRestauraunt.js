import { handleAction } from 'redux-actions'
import {
  GET_IMAGES_DATA,
  GET_RESTAURAUNT_DATA,
  SHOW_FINAL_CARD,
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

const showFinalCard = handleAction(
  SHOW_FINAL_CARD,
  (state, { payload }) => payload,
  false,
)

const newRestauraunt = combineReducers({
  imageData,
  restaurauntData,
  showFinalCard,
})

export default newRestauraunt
