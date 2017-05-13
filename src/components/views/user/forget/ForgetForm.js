/**
 * Created by Freeman on 2017/3/28.
 */
import React from 'react'
import {reduxForm, Field} from 'redux-form'
import VerifyCode, {renderField} from '../verifyCode'
import {required, minLength} from '../../../../utils/validateRules'

const ForgetForm = (props) => {
  const {verifyCodeCountDown, sendSmsVerifyCode, handleSubmit, submitting, invalid} = props

  return (
    <form onSubmit={handleSubmit}>
      <VerifyCode sendSmsVerifyCode={sendSmsVerifyCode} verifyCodeCountDown={verifyCodeCountDown}/>
      <Field name="password" type="password" placeholder="输入密码(6位以上)" component={renderField}
             validate={[required('密码'), minLength(6)]}/>
      <div className="input-area">
        <div className="register-button">
          <input type="submit" value="保存" disabled={ invalid || submitting }/>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'forget',
})(ForgetForm)
