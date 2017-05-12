/**
 * Created by freeman on 17-3-25.
 */
import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../../../actions'
import initHeader from '../../../../utils/Header'
import RegisterForm from './RegisterForm'
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    form: state.form
  }
}
const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(Actions, dispatch)
  }
)
@connect(mapStateToProps, mapDispatchToProps)
class Register extends React.Component {

  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.handleSendSmsVerifyCode = this.handleSendSmsVerifyCode.bind(this)
  }

  componentDidMount() {
    const {actions} = this.props
    let header = {
      title: '注册',
      isMore: true,
      moreItem: <Link to={'/login'}>登录</Link>,
    }
    actions.updateHeader(Object.assign({}, initHeader, header))
    actions.updateFooter(false)
  }

  submitForm(values) {
    const {actions} = this.props
    actions.register(values)
  }

  handleSendSmsVerifyCode() {
    const {form, actions} = this.props
    console.log(form.register)
    if (form.register && form.register.values && form.register.values.username) {
      actions.sendSmsVerifyCode(form.register.values.username, 1)
    }
  }

  render() {
    const {auth} = this.props
    return (
      <div className="jx-top-con">
        <img src="http://app.linkup.net.cn/images/logo.597892d.png" className="jx-mark" alt="logo"/>
        <RegisterForm onSubmit={this.submitForm} sendSmsVerifyCode={this.handleSendSmsVerifyCode}
                      verifyCodeCountDown={auth.verifyCodeCountDown}/>
        <Link to="/forget" className="jx-forget">点击确认即同意《用户协议》</Link>
      </div>
    )
  }
}
export default Register
