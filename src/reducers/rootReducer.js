import auth from './auth'
import { combineReducers } from 'redux'
import databaseData from './databaseData'

const rootReducer = combineReducers({
  auth,
  databaseData,
})

export default rootReducer
