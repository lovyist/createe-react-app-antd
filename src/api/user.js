/**
 * Created by Freeman on 2017/3/16.
 */
import axios from './api'

const login = (user) => {
  return axios.post('auth', user)
}
const register = (user) => {
  return axios.post('auth/register', user)
}

const sendSmsVerifyCode = (phone, type) => {
  return axios.post('auth/sms', {
    phone: phone,
    type: type
  })
}
const logout = () => {
  return axios.post('auth/logout')
}
const getWeChatConfig = (url) => {
  return axios.get('wechat/jsconfig', {
    params: {
      url: url
    }
  })
}

export default {
  login,
  register,
  logout,
  sendSmsVerifyCode,
  getWeChatConfig,
}
