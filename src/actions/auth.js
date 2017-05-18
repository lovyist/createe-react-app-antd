/**
 * Created by Freeman on 2017/3/27.
 */
import {push} from 'react-router-redux'
import userAPI from '../api/user'
import * as types from '../constants/ActionTypes'
import userUtils from '../utils/userUtils'
import CONFIG from '../config'
import {successTip, warnTip} from './index'
const loginSuccess = (token) => {
  return {
    type: types.UPDATE_USER_INFO,
    token,
    userInfo: userUtils.getInfoFromToken(token)
  }
}

export const login = (user) => {
  return (dispatch) => {
    userAPI.login(user)
      .then(res => res.data)
      .then(res => {
        if (res.errNo !== 0) {
          return dispatch(warnTip(res.errMsg))
        }
        dispatch(successTip('登录成功'))
        dispatch(push('/'))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

/**
 * 发送短信验码
 * @param commit
 * @param payload 手机号和验证码类型
 */
export const sendSmsVerifyCode = function (username, type) {
  return dispatch => {
    userAPI.sendSmsVerifyCode(username, type)
      .then(res => res.data)
      .then(resp => {
          if (resp.errNo !== 0) {
            return dispatch(warnTip(resp.errMsg))
          }
          dispatch(successTip('验证码已发送'))
          let countDown = CONFIG.SMS_VERIFY_CODE_COUNT_DOWN
          let t = window.setInterval(() => {
            if (countDown === 0) {
              window.clearInterval(t)
            }
            dispatch({type: types.UPDATE_VERIFY_CODE_COUNT_DOWN, countDown: countDown--})
          }, 1000)
        }
      )
      .catch(err => {
        return Promise.reject(err)
      })
  }

}

export const register = (user) => {
  return (dispatch) => {
    userAPI.register(user)
      .then(res => res.data)
      .then(res => {
        if (res.errNo !== 0) {
          return dispatch(warnTip(res.errMsg))
        }
        userUtils.storageLastUsePhone(user.username)
        dispatch(push('/login'))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export const resetPwd = (user) => {
  return (dispatch) => {
    userAPI.resetPwd(user)
      .then(res => res.data)
      .then(res => {
        if (res.errNo !== 0) {
          return dispatch(warnTip(res.errMsg))
        }
        dispatch(push('/login'))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export const logout = () => {
  return (dispatch) => {

    userAPI.logout()
      .then(res => res.data)
      .then(res => {
        let lastUsePhone = userUtils.getLastUsePhone()
        localStorage.clear()
        userUtils.storageLastUsePhone(lastUsePhone)
        dispatch(successTip('退出成功'))
        dispatch(push('/login'))
      })
  }
}

export const updateUser = () => {
  return (dispatch) => {
    userAPI.getUserProfile()
      .then(res =>res.data)
      .then(res =>{
        dispatch({
          type: types.UPDATE_USER_INFO,
          userInfo: res.data
        });
      })

  }
}
