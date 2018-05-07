import ENDPOINTS from '../api'

const getVoteTime = token =>
  fetch(ENDPOINTS.VOTE_TIME(token))
    .then(data => data.json())
    .catch(error => console.log(error))

export default getVoteTime
