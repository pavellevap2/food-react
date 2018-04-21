const API_KEY = 'AIzaSyCPrBtGrUN0DRNbkZ7CrlMwT3oNetlzsRA'

const ENDPOINTS = {
  LOGIN_WITH_EMAIL: `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`,
  SYNC_WITH_DB: token =>
    `https://food-fd399.firebaseio.com/restaraunts.json?auth=${token}`,
}

export default ENDPOINTS
