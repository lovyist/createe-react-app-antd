import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import classNames from 'classnames'
import * as Actions from '../actions'

import Tip from '../components/commons/tip'
const mapStateToProps = (state) => {
  return {
    header: state.header,
    footer: state.footer,
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
    actions.updateUser()
    // 初始化微信配置
    //actions.initWeChat()
  }

  render() {
    const {footer, msg, children, location,} = this.props
    return (
      <div>
        <Tip msg={msg}/>
        {children}
      </div>
    )
  }
}

App.propTypes = {
  header: PropTypes.object,
  footer: PropTypes.object,
  actions: PropTypes.object,
  // Injected by React Router
  children: PropTypes.node,
  location: PropTypes.object
}

export default App
