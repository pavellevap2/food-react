import ENDPOINTS from '../api'

const syncWithDataBase = token =>
  fetch(ENDPOINTS.SYNC_WITH_DB(token))
    .then(data => data.json())
    .then(data => {
      if (!data.error) {
        const newData = []
        for (const key in data) {
          newData.push({ ...data[key], key })
        }
        return newData
      } else {
        return data
      }
    })
    .catch(error => console.log(error))

export default syncWithDataBase
