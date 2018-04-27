import auth from './auth'
import { combineReducers } from 'redux'
import restaurauntsData from './restauraunts'
import newRestauraunt from './newRestauraunt'

const rootReducer = combineReducers({
  auth,
  restaurauntsData,
  newRestauraunt,
})

export default rootReducer
