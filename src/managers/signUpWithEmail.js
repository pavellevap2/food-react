import ENDPOINTS from '../api'

const signUpWithEmail = (email, password) =>
  fetch(ENDPOINTS.SIGNUP_WITH_EMAIL, {
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

export default signUpWithEmail
