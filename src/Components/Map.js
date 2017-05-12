import React from 'react'
import lazyLoadMapApi from '../utils/lazyLoadMapApi'
import CONFIG from '../config'

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  }
}

class AMap extends React.Component {
  componentDidMount() {
    const mapElementId = 'container'
    const loadConfig = {
      key: CONFIG.AMAP_KEY,
    }
    let map, geolocation
    lazyLoadMapApi(loadConfig).then(() => {

      const conf = {
        zoom: 15,
        center: [CONFIG.INIT_GEO.lng, CONFIG.INIT_GEO.lat]
      }
      map = new window.AMap.Map(mapElementId, conf)
      geolocation = new window.AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        buttonOffset: new window.AMap.Pixel(7, 60),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        buttonPosition: 'LB'
      })
      map.addControl(geolocation)
      geolocation.getCurrentPosition()
      window.AMap.event.addListener(geolocation, 'complete', onComplete)//返回定位信息
      window.AMap.event.addListener(geolocation, 'error', onError)      //返回定位出错信息

      map.on('click', function (e) {
        console.log('您在[ ' + e.lnglat.getLng() + ',' + e.lnglat.getLat() + ' ]的位置点击了地图！')
      })

    })

    //解析定位结果
    function onComplete(data) {
      let str = ['定位成功']
      str.push('经度：' + data.position.getLng())
      str.push('纬度：' + data.position.getLat())
      if (data.accuracy) {
        str.push('精度：' + data.accuracy + ' 米')
      }//如为IP精确定位结果则没有精度信息
      str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'))
      alert(str.join('<br>'))
    }

    //解析定位错误信息
    function onError(data) {
      alert('定位失败')
    }
  }

  render() {
    return (
      <div className="react-amap-container">
        <div id="container" style={styles.container}/>
      </div>
    )
  }
}

AMap.propTypes = {}

export default AMap
