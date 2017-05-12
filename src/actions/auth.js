/**
 * Created by Freeman on 2017/3/27.
 */
import {push} from 'react-router-redux'
import userAPI from '../api/user'
import * as types from '../constants/ActionTypes'
import userUtils from '../utils/userUtils'
import CONFIG from '../config'
import {showTip} from './index'
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
        userUtils.storageUserInfo(res, user.username)
        dispatch(showTip('登录成功'))
        dispatch(push('/'))
        return dispatch(loginSuccess(res.token))
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
      .then(resp => {
          if (resp.status === 200) {
            //dispatch(types.UPDATE_TIP, '验证码发送成功')
            let countDown = CONFIG.SMS_VERIFY_CODE_COUNT_DOWN
            let t = window.setInterval(() => {
              if (countDown === 0) {
                window.clearInterval(t)
              }
              dispatch({type: types.UPDATE_VERIFY_CODE_COUNT_DOWN, countDown: countDown--})
            }, 1000)
          }
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
        userUtils.storageLastUsePhone(user.username)
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
        dispatch(showTip('退出成功'))
        dispatch(push('/login'))
      })
  }
}

export const updateUser = () => {
  return (dispatch) => {
    const jsonUser = localStorage.getItem(CONFIG.USER_INFO)
    const userInfo = JSON.parse(jsonUser)
    return dispatch({
      type: types.UPDATE_USER_INFO,
      userInfo: userInfo
    });
  }
}
