import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import classNames from 'classnames'
import * as Actions from '../actions'

import Tip from '../components/commons/tip'
import CONFIG from "../config";
const mapStateToProps = (state) => {
  return {
    msg: state.msg,
  }
}

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(Actions, dispatch)
  }
)
@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {

  constructor(props) {
    super(props)
    this.initApp = this.initApp.bind(this)
  }

  componentDidMount() {
    this.initApp()
  }

  initApp() {
    const {actions} = this.props
    // 初始化用户信息
    const api_token = localStorage.getItem(CONFIG.API_TOKEN)
    if (api_token) {
      actions.updateUser()
    }
  }

  render() {
    const {msg, children,} = this.props
    return (
      <div>
        <Tip msg={msg}/>
        {children}
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object,
  // Injected by React Router
  children: PropTypes.node,
}

export default App
