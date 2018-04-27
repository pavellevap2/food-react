import auth from './auth'
import { combineReducers } from 'redux'
import databaseData from './databaseData'
import newRestauraunt from './newRestauraunt'

const rootReducer = combineReducers({
  auth,
  databaseData,
  newRestauraunt,
})

export default rootReducer
