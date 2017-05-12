import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import {routerReducer as routing} from 'react-router-redux'
import {header, footer, msg} from './app'
import auth from './auth'

const rootReducer = combineReducers({
  header,
  footer,
  msg,
  auth,
  form,
  routing,
})

export default rootReducer
