import ENDPOINTS from '../api'

const refreshUserData = token =>
  fetch(ENDPOINTS.REFRESH_DATA, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

    body: `grant_type=refresh_token&refresh_token=${token}`,
  })
    .then(data => data.json())
    .catch(error => console.log(error))

export default refreshUserData
