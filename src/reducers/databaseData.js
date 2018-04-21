import { handleAction } from 'redux-actions'
import { GET_DB_DATA } from '../actions/database'

const databaseData = handleAction(
  GET_DB_DATA,
  (state, { payload }) => payload,
  [],
)

export default databaseData
