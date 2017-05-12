import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../../../actions'
import {backHeader} from '../../../../utils/Header'
import ForgetForm from './ForgetForm'
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
    let header = {
      isShowBack: true,
      title: '忘记密码',
      isMore: false
    }
    actions.updateHeader(Object.assign({}, backHeader, header))
    actions.updateFooter(false)
  }

  submitForm(values) {
    const {actions} = this.props
    actions.register(values)
  }

  handleSendSmsVerifyCode() {
    const {form, actions} = this.props
    if (form.forget && form.forget.values && form.forget.values.username) {
      actions.sendSmsVerifyCode(form.forget.values.username, 2)
    }
  }

  render() {
    const {auth} = this.props
    return (
      <div className="jx-top-con">
        <ForgetForm onSubmit={this.submitForm} sendSmsVerifyCode={this.handleSendSmsVerifyCode}
                    verifyCodeCountDown={auth.verifyCodeCountDown}/>
      </div>
    )
  }
}

Forget.propTypes = {
  auth: React.PropTypes.object,
  form: React.PropTypes.object,
  actions: React.PropTypes.object,
}

export default Forget
