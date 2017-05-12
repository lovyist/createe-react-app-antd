import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../actions'
import Map from '../components/Map'
import loading from '../assets/loading.gif'
const style = {
  position:'absolute',
  width:'100%',
  height:'30%',
  left:0,
  bottom:0,
  backgroundColor:'#fff'
}

class App extends Component {

  render() {
    const {geo,aqi,actions} = this.props
    return (
      <div>

        <Map geo={geo} aqi={aqi} actions={actions} />
        {
          (aqi.loading || aqi.data.aqi) &&
          <div style={style}>
            {
              aqi.loading &&
              <div className="loading">
                <img src={loading} alt=""/>
              </div>
            }
            {
              (!aqi.loading && aqi.data.aqi) &&
              <div className="result">
                <h3>{aqi.data.city.name}</h3>
                <h4>空气污染指数:{aqi.data.aqi}</h4>
              </div>
            }
          </div>
        }
      </div>
    )
  }
}

App.propTypes = {
  geo: PropTypes.object.isRequired,
  aqi: PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    geo: state.geo,
    aqi: state.aqi,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)