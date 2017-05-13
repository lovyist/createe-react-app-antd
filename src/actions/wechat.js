import * as types from '../constants/ActionTypes'
import userUtils from '../utils/userUtils'
import userAPI from '../api/user'
import {showTip} from './index'

/**
 * 获取微信初始化参数
 * @return Promise
 */
const getWechatInitConfig = function () {
  let url = location.href.split('#')[0]
  console.warn('getWechatInitConfig->url: ', url)
  return userAPI.getWeChatConfig(url)
}

/**
 * 初始化微信SDK
 */
/*export const initWeChat = () => {
  return dispatch => {
    if (!userUtils.isWeChat()) {
      return
    }
    getWechatInitConfig().then(res => {
      let data = res.data
      wx.config({
        debug: false,
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp + '', // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature,// 必填，签名，见附录1
        jsApiList: [    // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo',
          'onMenuShareQZone'
        ]
      })
      wx.ready(function () {
        console.log('wechat ready')
        dispatch(showTip('wechat ready'))
        dispatch({type: types.UPDATE_WECHAT_INITD_STATUS, status: true})
      })
      wx.error(function (res) {
        dispatch(showTip('wechat ready' + res))
        console.error('wechat ready error', res)
      })
    })
  }
}*/

/**
 * 初始化分享接口
 * @param opts 分享參數
 * {
 *  title: xxx,     // 分享标题
 *  link: xxx,      // 分享链接
 *  imgUrl: xxx     // 分享图片
 * }
 */
/*export const initShare = (opts) => {
  return dispatch => {
    if (!userUtils.isWeChat()) {
      return
    }
    wx.onMenuShareTimeline({    //分享到朋友圈
      title: opts.desc,
      link: opts.link,
      imgUrl: opts.imgUrl,
      success: function () {
        dispatch(showTip('分享成功'))
      },
      cancel: function () {
        console.warn('onMenuShareTimeline share error')
      }
    })

    wx.onMenuShareAppMessage({  //分享给朋友
      title: opts.title,
      desc: opts.desc, // 分享描述
      link: opts.link,
      imgUrl: opts.imgUrl,
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        dispatch(showTip('分享成功'))
      },
      cancel: function () {
        console.log('onMenuShareAppMessage share error')
      }
    })

    wx.onMenuShareQQ({  //ios分享到QQ
      title: opts.title,
      desc: opts.desc,
      link: opts.link,
      imgUrl: opts.imgUrl,
      success: function () {
        dispatch(showTip('分享成功'))
      },
      cancel: function () {
        console.log('onMenuShareQQ share error')
      },
      fail: function (msg) {
        console.error('onMenuShareQQ share fail', msg)
      }
    })

    wx.onMenuShareQZone({   //ios分享到QQ空间
      title: opts.title,
      desc: opts.desc,
      link: opts.link,
      imgUrl: opts.imgUrl,
      success: function () {
        dispatch(showTip('分享成功'))
      },
      cancel: function () {
        console.log('onMenuShareQZone share error')
      },
      fail: function (msg) {
        console.error('onMenuShareQZone share fail', msg)
      }
    })

    wx.onMenuShareWeibo({   //分享到腾讯微博
      title: opts.title,
      desc: opts.desc,
      link: opts.link,
      imgUrl: opts.imgUrl,
      success: function () {
        dispatch(showTip('分享成功'))
      },
      cancel: function () {
        console.warn('onMenuShareWeibo share error')
      }
    })
  }

}*/


