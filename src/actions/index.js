import {
  UPDATE_HEADER, UPDATE_FOOTER, UPDATE_TIP, UPDATE_LOADING
} from '../constants/ActionTypes'
import CONFIG from '../config'
export const updateHeader = (header) => {
  return {
    type: UPDATE_HEADER,
    header
  }
}

export const updateFooter = (isFootShow = true) => {
  return {
    type: UPDATE_FOOTER,
    isFootShow
  }
}

export const updateTip = (tipText) => {
  return {
    type: UPDATE_TIP,
    tipText
  }
}

export const showTip = (tipText) => {
  return dispatch => {
    dispatch(updateTip(tipText))
    setTimeout(() => {
      dispatch(updateTip(''))
    }, CONFIG.SHOW_TIP_TIME);
  }
}


export const updateLoading = (isLoading) => {
  return {
    type: UPDATE_LOADING,
    isLoading
  }
}

export * from './auth';
export * from './wechat';
