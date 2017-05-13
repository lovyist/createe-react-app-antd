/**
 * Created by Freeman on 2017/3/27.
 */
import React from 'react'
import {reduxForm, Field} from 'redux-form'
import VerifyCode, {renderField} from '../verifyCode'
const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  if (!values.phoneNum) {
    errors.phoneNum = 'Required'
  }
  if (!values.phoneCode) {
    errors.phoneCode = 'Required'
  }
  console.log(errors)
  return errors
}
const RegisterForm = (props) => {
  const {verifyCodeCountDown, sendSmsVerifyCode, handleSubmit, submitting, invalid} = props

  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" type="text" placeholder="输入用户名" component={renderField}/>
      <Field name="password" type="password" placeholder="输入密码(6位以上)" component={renderField}/>
      <VerifyCode sendSmsVerifyCode={sendSmsVerifyCode} verifyCodeCountDown={verifyCodeCountDown}/>
      <div className="input-area">
        <div className="register-button">
          <input type="submit" value="注册" disabled={ invalid || submitting }/>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'register',
  validate
})(RegisterForm)
