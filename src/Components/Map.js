import React from 'react';
import uuid from 'uuid/v4';
import lazyLoadMapApi from '../utils/lazyLoadMapApi';
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
  },
  map: {
    width: '100%',
    height: '100%',
  },
};

class AMap extends React.Component {
  componentDidMount() {
    const {actions} = this.props
    const mapElements = document.querySelectorAll('.react-amap-container .react-amap');
    const loadConfig = {
      key: CONFIG.AMAP_KEY,
    };
    let elementId;
    lazyLoadMapApi(loadConfig).then(() => {
      Array.from(mapElements).forEach(($el, index) => {
        elementId = uuid(); // 生成uuid
        $el.id = elementId;
        const conf = {
          zoom:15,
          center: [CONFIG.INIT_GEO.lng, CONFIG.INIT_GEO.lat]
        }
        this[`mapInstance${index}`] = new window.AMap.Map(elementId,conf);
        this[`mapInstance${index}`].on('click', function (e) {
          console.log('您在[ ' + e.lnglat.getLng() + ',' + e.lnglat.getLat() + ' ]的位置点击了地图！');
          actions.selectGeo(e.lnglat.getLng(),e.lnglat.getLat())
          actions.fetchAQI()
        });
      })
    });
  }

  render() {
    return (
        <div className="react-amap-container" style={styles.container}>
          <div className="react-amap" style={styles.map}></div>
        </div>
    );
  }
}

AMap.propTypes = {
  geo: React.PropTypes.object.isRequired,
  aqi: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
}

export default AMap