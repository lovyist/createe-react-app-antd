/**
 * Created by freeman on 17-3-25.
 */
import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../../../actions'
import initHeader from '../../../../utils/Header'
import LoginForm from './LoginForm'

const mapStateToProps = (state) => {
  return {
    header: state.header
  }
}
const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(Actions, dispatch)
  }
)
@connect(mapStateToProps, mapDispatchToProps)
export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
  }

  componentDidMount() {
    const {actions} = this.props
    let header = {
      title: '登录',
      isMore: true,
      moreItem: <Link to={'/register'}>注册</Link>,
    }
    actions.updateHeader(Object.assign({}, initHeader, header))
    actions.updateFooter(false)
  }

  submitForm(values) {
    const {actions} = this.props
    actions.login(values)
  }

  render() {

    return (
      <div className="jx-top-con">
        <img src="http://app.linkup.net.cn/images/logo.597892d.png" className="jx-mark" alt="logo"/>
        <LoginForm onSubmit={this.submitForm}/>
        <Link to="/forget" className="jx-forget">忘记密码</Link>
      </div>
    )
  }
}

Login.propTypes = {
  header: React.PropTypes.object,
  actions: React.PropTypes.object,
}


