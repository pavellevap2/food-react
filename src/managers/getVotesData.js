import ENDPOINTS from '../api'

const getVotesData = token =>
  fetch(ENDPOINTS.VOTE_DATA(token))
    .then(data => data.json())
    .then(res => res.data)
    .catch(error => console.log(error))

export default getVotesData
