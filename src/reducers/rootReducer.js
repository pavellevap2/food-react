import auth from './auth'
import { combineReducers } from 'redux'
import restaurauntsData from './restauraunts'
import newRestauraunt from './newRestauraunt'
import voteConfig from './voteConfig'
import voteData from './voteData'

const rootReducer = combineReducers({
  auth,
  restaurauntsData,
  newRestauraunt,
  voteConfig,
  voteData,
})

export default rootReducer
