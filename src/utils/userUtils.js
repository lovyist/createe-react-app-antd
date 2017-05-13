/**
 * Created by Freeman on 2017/3/16.
 */
import uaParser from 'ua-parser-js' // 客户端浏览器信息解析模块
import jwtDecode from 'jwt-decode'
import constants from '../config'
import moment from 'moment'
import cookie from 'react-cookie'
import CONFIG from '../config'

let cookieConfig = {}
if (CONFIG.COOKIE_DOMAIN !== '') {
  cookieConfig = {domain: CONFIG.COOKIE_DOMAIN}
}

export function getCookie(name) {
  return cookie.load(name)
}

export function setCookie(name, value) {
  cookie.save(name, value, cookieConfig)
}

export function signOut() {
  cookie.remove(CONFIG.API_TOKEN, cookieConfig)
}
/**
 * 是否登录
 * token 存在
 * @returns {boolean} 已经登录返回true，否则返回false
 */
export function isLogin() {
  return !!cookie.load(CONFIG.API_TOKEN)
}
/**
 * 是否微信端
 * @returns {boolean}
 */
const isWeChat = function () {
  let ua = uaParser(navigator.userAgent)
  let browserName = ua.browser.name
  return browserName === 'WeChat'
}



/**
 * 格式化日期
 * @param value     日期毫秒值
 * @param format    格式
 * @returns {string}
 */
const formatDate = function (value, format) {
  if (!value) {
    return ''
  }

  format = format || 'YYYY-MM-DD hh:mm:ss'
  return moment(Number(value)).format(format)
}

/**
 * 调用函数
 * @param fun 函数引用
 * @param args 函数参数
 */
const callFun = function (fun, ...args) {
  fun && typeof(fun) === 'function' && fun(...args)
}

/**
 * 获取最后一次使用的手机号
 */
const getLastUsePhone = function () {
  return localStorage.getItem(constants.CACHE_LAST_USE_LOGIN_PHONE) || ''
}

/**
 * 设置最后一次使用的手机号
 */
const storageLastUsePhone = function (phone) {
  return localStorage.setItem(constants.CACHE_LAST_USE_LOGIN_PHONE, phone || '')
}

/**
 * 从token中解析用户信息
 * @param token
 * @return userInfo
 */
const getInfoFromToken = (token) => {
  return jwtDecode(token)
}

/**
 * 存储用户信息到localStorage
 * @param data  用户信息
 * @param phone 手机号
 */
const storageUserInfo = function (data, phone) {
  let apiToken = data.token
  localStorage.setItem(constants.API_TOKEN, apiToken)
  localStorage.setItem(constants.USER_INFO, JSON.stringify(getInfoFromToken(apiToken)))
  storageLastUsePhone(phone)
}

function checkTokenExpDiff(token) {
  let tokenPayload = getInfoFromToken(token)
  let expiry = moment.unix(tokenPayload.exp)
  return expiry.diff(moment(), 'seconds')
}

/**
 * 校验手机号
 * @param phone
 */
const checkPhone = function (phone) {
  return /^1[34578]\d{9}$/.test(phone)
}

const redirectToBack = (nextState, replace) => {
  //已经登录则不进入
  if (isLogin()) {
    replace('/')
  }
}
const redirectToLogin = (nextState, replace) => {
  if (!isLogin()) {
    replace('/login')
  }
}

export default {
  isWeChat,
  isLogin,
  formatDate,
  callFun,
  getLastUsePhone,
  storageLastUsePhone,
  storageUserInfo,
  checkPhone,
  getInfoFromToken,
  redirectToLogin,
  redirectToBack,
}
