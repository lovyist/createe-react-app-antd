/**
 * Created by Freeman on 2017/3/27.
 */
import React from 'react'
import {reduxForm, Field} from 'redux-form'
import classNames from 'classnames';
import WeUI from 'react-weui'
const {ButtonArea, Form,} = WeUI
import VerifyCode, {renderField} from '../verifyCode'
const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  if (!values.verifyCode) {
    errors.verifyCode = 'Required'
  }
  console.log(errors)
  return errors
}
const RegisterForm = (props) => {
  const {verifyCodeCountDown, sendSmsVerifyCode, handleSubmit, submitting, invalid} = props

  return (
    <form onSubmit={handleSubmit}>
      <Form className="jx-ipt-wrap">
        <VerifyCode sendSmsVerifyCode={sendSmsVerifyCode} verifyCodeCountDown={verifyCodeCountDown}/>
        <Field name="password" type="password" placeholder="输入密码(6位以上)" component={renderField}/>
      </Form>
      <ButtonArea>
        <button className={classNames('weui-btn', {
          'weui-btn_primary': !invalid,
          'weui-btn_default weui-btn_disabled': invalid || submitting
        })} disabled={ invalid || submitting } type="submit">
          注册
        </button>
      </ButtonArea>
    </form>
  )
}

export default reduxForm({
  form: 'register',
  validate
})(RegisterForm)
