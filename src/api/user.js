/**
 * Created by Freeman on 2017/3/16.
 */
import qs from 'qs'
import axios from './api'

const login = (user) => {
  return axios.post('/user/pass/login', qs.stringify(user))
}
const register = (user) => {
  return axios.post('/user/pass/register',  qs.stringify(user))
}

const sendSmsVerifyCode = (phoneNum, codeType) => {
  return axios.post('/user/pass/sendPhoneCode', qs.stringify({phoneNum,codeType}))
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
