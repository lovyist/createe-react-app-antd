/**
 * Created by Freeman on 2017/3/27.
 */
import {UPDATE_USER_INFO, UPDATE_VERIFY_CODE_COUNT_DOWN} from '../constants/ActionTypes'
// 用户初始化信息
const DEFAULT_USER_INFO = {
  username: "",
}
// initial state
const initState = {
  userInfo: DEFAULT_USER_INFO,    // 当前登录用户的用户信息
  otherUserInfo: {},              // 其它用户的信息（当前登录用户查看其它用户的信息）
  verifyCodeCountDown: 0,         // 短信验证码倒计时
}

export default function auth(state = initState, action) {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo
      }
    case UPDATE_VERIFY_CODE_COUNT_DOWN:
      return {
        ...state,
        verifyCodeCountDown: action.countDown,
      }
    default:
      return state
  }
}
