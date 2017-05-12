import {
  SELECT_GEO,
  AQI_REQUEST, AQI_SUCCESS, AQI_FAILURE
} from '../constants/ActionTypes'
import CONFIG from '../config'

export const selectGeo = (lng, lat) => ({
  type: SELECT_GEO,
  json: {
    lng: lng,
    lat: lat
  }
})

export const requestAQI = () => ({
  type: AQI_REQUEST,
})


export const fetchAQI = () => (dispatch, getState) => {
  dispatch(requestAQI())
  const geo = getState().geo
  const lat = geo.lat
  const lng = geo.lng
  const token = CONFIG.AQI_TOKEN
  return fetch(`https://api.waqi.info/feed/geo:${lat};${lng}/?token=${token}`)
      .then(response => response.json())
      .then(json => dispatch({
        type: AQI_SUCCESS,
        json: json.data
      }))
      .catch(json => dispatch({
        type: AQI_FAILURE,
      }))
}