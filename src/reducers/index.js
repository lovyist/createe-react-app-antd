import {combineReducers} from 'redux'
import {
  SELECT_GEO,
  AQI_REQUEST,AQI_SUCCESS,AQI_FAILURE
} from '../constants/ActionTypes'
import CONFIG from '../config'
const geo = (state = CONFIG.INIT_GEO, action) => {
  switch (action.type) {
    case SELECT_GEO:
      return {
          ...state,
          ...action.json
      }
    default:
      return state
  }
}
const aqi = (state = {
  loading:false,
  data:{}
}, action) => {
  switch (action.type) {
    case AQI_REQUEST:
      return {
          ...state,
        loading:true
      }
    case AQI_SUCCESS:
      return {
        ...state,
        loading:false,
        data:action.json
      }
    case AQI_FAILURE:
      return {
        ...state,
        loading:false,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  geo,
  aqi
})

export default rootReducer