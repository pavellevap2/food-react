import ENDPOINTS from '../api'

const changeVoteNumber = (token, index, data) =>
  fetch(ENDPOINTS.CURR_VOTE(token, index), {
    method: 'PUT',
    body: JSON.stringify(data),
  })
    .then(data => data.json())
    .catch(error => console.log(error))

export default changeVoteNumber
