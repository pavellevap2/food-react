const API_KEY = 'AIzaSyCPrBtGrUN0DRNbkZ7CrlMwT3oNetlzsRA'
const API_URL_IDENTITY =
  'https://www.googleapis.com/identitytoolkit/v3/relyingparty/'

const ENDPOINTS = {
  LOGIN_WITH_EMAIL: `${API_URL_IDENTITY}verifyPassword?key=${API_KEY}`,
  SIGNUP_WITH_EMAIL: `${API_URL_IDENTITY}signupNewUser?key=${API_KEY}`,
  SYNC_WITH_DB: token =>
    `https://food-fd399.firebaseio.com/restaraunts.json?auth=${token}`,
  REFRESH_DATA: `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
  PUSH_CLOUD_MESSAGE: ``,
}

export default ENDPOINTS
