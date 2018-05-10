import ENDPOINTS from '../api'

const getVotesData = token =>
  fetch(ENDPOINTS.VOTE_DATA(token))
    .then(data => data.json())
    .then(res => res.data)

    .then(res => res.map(x => ({ ...x, vote: !x.vote ? [] : x.vote })))
    .catch(error => console.log(error))

export default getVotesData
