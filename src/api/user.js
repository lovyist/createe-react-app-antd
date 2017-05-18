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
const isRegister = (data) => {
  return axios.get(`/user/pass/isRegister?${qs.stringify(data)}`)
}
const resetPwd = (data) => {
  return axios.post('/user/pass/resetPwd',  qs.stringify(data))
}
const sendSmsVerifyCode = (phoneNum, codeType) => {
  return axios.post('/user/pass/sendPhoneCode', qs.stringify({phoneNum,codeType}))
}
const logout = () => {
  return axios.get('/user/pass/logout')
}
const getWeChatConfig = (url) => {
  return axios.get('wechat/jsconfig', {
    params: {
      url: url
    }
  })
}

const getUserProfile = () =>{
  return axios.get('/user/center/profile')
}

export default {
  login,
  register,
  isRegister,
  resetPwd,
  logout,
  sendSmsVerifyCode,
  getWeChatConfig,
  getUserProfile,
}
