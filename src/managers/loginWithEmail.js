import ENDPOINTS from '../api'

const loginWithEmail = (email, password) =>
  fetch(ENDPOINTS.LOGIN_WITH_EMAIL, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      email: email,
      password: password,
      returnSecureToken: true,
    }),
  })
    .then(data => data.json())
    .catch(error => console.log(error))

export default loginWithEmail
//auth manager and db manager
