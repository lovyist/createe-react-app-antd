/**
 * Created by Freeman on 2017/3/27.
 */
import React from 'react'
import {reduxForm, Field} from 'redux-form'
import VerifyCode, {renderField} from '../verifyCode'
import { required,minLength } from '../../../../utils/validateRules'
const RegisterForm = (props) => {
  const {verifyCodeCountDown, sendSmsVerifyCode, handleSubmit, submitting, invalid} = props

  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" type="text" placeholder="输入用户名" component={renderField} validate={[required('用户名')]}/>
      <Field name="password" type="password" placeholder="输入密码(6位以上)" component={renderField} validate={[required('密码'),minLength(6)]}/>
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
})(RegisterForm)
