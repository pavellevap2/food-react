import auth from './auth'
import { combineReducers } from 'redux'
import restaurauntsData from './restauraunts'
import newRestauraunt from './newRestauraunt'
import voteConfig from './voteConfig'
import voteParams from './voteParams'

const rootReducer = combineReducers({
  auth,
  restaurauntsData,
  newRestauraunt,
  voteConfig,
  voteParams,
})

export default rootReducer
