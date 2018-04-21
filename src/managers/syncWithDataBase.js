import ENDPOINTS from '../api'

const syncWithDataBase = token =>
  fetch(ENDPOINTS.SYNC_WITH_DB(token))
    .then(data => data.json())
    .catch(error => console.log(error))

export default syncWithDataBase
