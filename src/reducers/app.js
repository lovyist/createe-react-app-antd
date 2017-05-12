/**
 * Created by freeman on 17-3-26.
 */
import {
  UPDATE_HEADER, UPDATE_FOOTER,
  UPDATE_LOADING, UPDATE_TIP
} from '../constants/ActionTypes'

import initHeader from '../utils/Header'

export const header = (state = initHeader, action) => {
  switch (action.type) {
    case UPDATE_HEADER:
      return {
        ...state,
        ...action.header
      }
    default:
      return state
  }
}

export const footer = (state = {
                         isFootShow: true
                       }, action) => {
  switch (action.type) {
    case UPDATE_FOOTER:
      return {
        ...state,
        isFootShow: action.isFootShow || false
      }
    default:
      return state
  }
}

export const msg = (state = {
                      isTip: false,
                      isLoading: false,
                      tipText: '',
                    }, action) => {
  switch (action.type) {
    case UPDATE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case UPDATE_TIP:
      return {
        ...state,
        isTip: !!action.tipText,
        tipText: action.tipText
      }
    default:
      return state
  }
}
