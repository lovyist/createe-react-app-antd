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
import login_bg from '../../../../assets/img/login-bg.png'
import user_pic from '../../../../assets/img/user-pic.png'
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
      isShow:false,
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
      <div className="content-wrap">
        <div className="cover"><img src={login_bg} alt=""/></div>
        <div className="container">
          <div className="pic-user">
            <div className="pic-area"><img src={user_pic} alt=""/></div>
          </div>
          <LoginForm onSubmit={this.submitForm}/>
          <div className="register-acc">
            <Link to="/forget"><span className="forget-pwd">忘记密码？</span></Link>
            <Link to="/register"><span className="reg-account">注册账号？</span></Link>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  header: React.PropTypes.object,
  actions: React.PropTypes.object,
}


