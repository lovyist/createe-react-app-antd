import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../../../actions'
import {backHeader} from '../../../../utils/Header'
import ForgetForm from './ForgetForm'
import CONFIG from '../../../../config'
import Header from "../../../Header/index";
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
class Forget extends Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.handleSendSmsVerifyCode = this.handleSendSmsVerifyCode.bind(this)
  }

  componentDidMount() {
    const {actions} = this.props
  }

  submitForm(values) {
    const {actions} = this.props
    actions.resetPwd(values)
  }

  handleSendSmsVerifyCode() {
    const {form, actions} = this.props
    if (form.forget && form.forget.values && form.forget.values.phoneNum) {
      actions.sendSmsVerifyCode(form.forget.values.phoneNum, CONFIG.SMS_CODE_TYPE.resetPwd)
    }
  }

  render() {
    const {auth} = this.props
    return (
      <div className="content-wrap">
        <Header title="重置密码"/>
        <div className="reg-container">
          <ForgetForm onSubmit={this.submitForm} sendSmsVerifyCode={this.handleSendSmsVerifyCode}
                      verifyCodeCountDown={auth.verifyCodeCountDown}/>
        </div>
      </div>
    )
  }
}

Forget.propTypes = {
  auth: PropTypes.object,
  form: PropTypes.object,
  actions: PropTypes.object,
}

export default Forget
