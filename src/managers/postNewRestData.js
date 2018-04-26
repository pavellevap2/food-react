import ENDPOINTS from '../api'

const postNewRestData = (data, token) =>
  fetch(ENDPOINTS.SYNC_WITH_DB(token), {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      avatar: data.avatar,
      check: data.averageСheck,
      description: data.restaurantDesc,
      geo: data.geo,
      kitchen: data.kitchenType,
      name: data.restaurantName,
      secondBack: data.imgUrl,
      slogan: data.slogan,
    }),
  })
    .then(data => data.json())
    .catch(error => console.log(error))

export default postNewRestData
