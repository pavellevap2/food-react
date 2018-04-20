import ENDPOINTS from '../api'

const loginWithEmail = (email, password) =>
  fetch(ENDPOINTS.LOGIN_WITH_EMAIL, {
    method: 'post',
    body: JSON.stringify({
      email: email,
      password: password,
      returnSecureToken: true,
    }),
  })
    .then(data => data.json())
    .catch(error => console.log(error))

export default loginWithEmail
