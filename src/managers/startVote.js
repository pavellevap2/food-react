import ENDPOINTS from '../api'

const startVote = (token, data) =>
  fetch(ENDPOINTS.VOTE_DATA(token), {
    method: 'PUT',
    body: JSON.stringify({ data }),
  })
    .then(data => data.json())
    .catch(error => console.log(error))

export default startVote
