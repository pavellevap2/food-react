const API_KEY = 'AIzaSyCPrBtGrUN0DRNbkZ7CrlMwT3oNetlzsRA'
const API_URL_IDENTITY =
  'https://www.googleapis.com/identitytoolkit/v3/relyingparty/'

const ENDPOINTS = {
  LOGIN_WITH_EMAIL: `${API_URL_IDENTITY}verifyPassword?key=${API_KEY}`,
  SIGNUP_WITH_EMAIL: `${API_URL_IDENTITY}signupNewUser?key=${API_KEY}`,
  SYNC_WITH_DB: token =>
    `https://food-fd399.firebaseio.com/restaraunts.json?auth=${token}`,
  REFRESH_DATA: `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
  VOTE_TIME: token =>
    `https://food-fd399.firebaseio.com/voteTime.json?auth=${token}`,
  VOTE_DATA: token =>
    `https://food-fd399.firebaseio.com/voteData.json?auth=${token}`,
  TEST: (token, index) =>
    `https://food-fd399.firebaseio.com/voteData/data/${index}/vote.json?auth=${token}`,
}

export default ENDPOINTS
