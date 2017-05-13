const CONFIG = {
  INIT_GEO: {
    lng: 116.396874,
    lat: 39.919078,
  },
  AMAP_KEY: 'b852298a6d3bea3899f3d85137b04bc8',
  AQI_TOKEN: '93b53a6b400c45f85cccd882c127b5710f25e78c',
  // 短信验证码
  SMS_CODE_TYPE:{
    register:'register',
    resetPwd:'resetPwd',
  },
  SMS_VERIFY_CODE_COUNT_DOWN: 60,         // 短信验证码倒计时（单位：秒）
  SHOW_TIP_TIME: 2000,         // 显示提示倒计时（单位：毫秒）
  API_TOKEN: 'API_TOKEN',
  USER_INFO: 'USER_INFO',
  CACHE_LAST_USE_LOGIN_PHONE: 'CACHE_LAST_USE_LOGIN_PHONE'
}

export default CONFIG
