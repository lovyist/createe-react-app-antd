/**
 * Created by Freeman on 2017/3/28.
 */
import React from 'react'
import {reduxForm} from 'redux-form'
import classNames from 'classnames';
import WeUI from 'react-weui'
const {ButtonArea, Form,} = WeUI
import VerifyCode from '../verifyCode'
const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.verifyCode) {
    errors.verifyCode = 'Required'
  }
  console.log(errors)
  return errors
}
const ForgetForm = (props) => {
  const {verifyCodeCountDown, sendSmsVerifyCode, handleSubmit, submitting, invalid} = props

  return (
    <form onSubmit={handleSubmit}>
      <Form className="jx-ipt-wrap">
        <VerifyCode sendSmsVerifyCode={sendSmsVerifyCode} verifyCodeCountDown={verifyCodeCountDown}/>
      </Form>
      <ButtonArea>
        <button className={classNames('weui-btn', {
          'weui-btn_primary': !invalid,
          'weui-btn_default weui-btn_disabled': invalid || submitting
        })} disabled={ submitting } type="submit">
          确认
        </button>
      </ButtonArea>
    </form>
  )
}

export default reduxForm({
  form: 'forget',
  validate
})(ForgetForm)
