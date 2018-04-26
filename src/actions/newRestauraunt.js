import { createAction } from 'redux-actions'

export const GET_IMAGES_DATA = '@@NEW_RESTAURAUNT/GET_IMAGES_DATA'
export const SUBMIT_REST_DATA = '@@NEW_RESTAURAUNT/SUBMIT_REST_DATA'
export const GET_RESTAURAUNT_DATA = `@@NEW_RESTAURAUNT/GET_RESTAURAUNT_DATA`

export const getImagesData = createAction(GET_IMAGES_DATA)
export const submitRestData = createAction(SUBMIT_REST_DATA)
export const getRestaurauntData = createAction(GET_RESTAURAUNT_DATA)
