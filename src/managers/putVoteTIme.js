import ENDPOINTS from '../api'

const putVoteTime = (token, data) =>
  fetch(ENDPOINTS.VOTE_TIME(token), {
    method: 'PUT',
    body: JSON.stringify({ time: data }),
  })
    .then(data => data.json())
    .catch(error => console.log(error))

export default putVoteTime
