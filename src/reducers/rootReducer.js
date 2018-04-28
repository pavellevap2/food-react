import auth from './auth'
import { combineReducers } from 'redux'
import restaurauntsData from './restauraunts'
import newRestauraunt from './newRestauraunt'
import voteConfig from './voteConfig'

const rootReducer = combineReducers({
  auth,
  restaurauntsData,
  newRestauraunt,
  voteConfig,
})

export default rootReducer
