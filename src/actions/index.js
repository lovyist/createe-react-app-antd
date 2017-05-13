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

export const updateTip = (type,text) => {
  return {
    type: UPDATE_TIP,
    msg_type:type,
    text
  }
}

export const showTip = (type,tipText) => {
  return dispatch => {
    dispatch(updateTip(type,tipText))
    setTimeout(() => {
      dispatch(updateTip(type,''))
    }, CONFIG.SHOW_TIP_TIME);
  }
}

export const successTip = (text) =>{
  return dispatch => {
    dispatch(showTip('success',text))
  }
}
export const warnTip = (text) =>{
  return dispatch => {
    dispatch(showTip('warn',text))
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
