import React from 'react';
import classNames from 'classnames'
import {Field} from 'redux-form'
import { required,phone } from '../../../utils/validateRules'
export const renderField = ({input, label, type, placeholder, vcode,vcodeClickHandle,verifyCodeCountDown, meta: {asyncValidating, touched, error}}) => (
  <div className="area">
    <div className="input-area">
      <input type={type} placeholder={placeholder} {...input}
             className={classNames({'text-yzm': vcode})}/>
      {
        vcode &&
        <button type="button" className="btn-yzm" onClick={vcodeClickHandle} disabled={verifyCodeCountDown > 0}>
          <span
            className={classNames({
              'f-text': verifyCodeCountDown === 0,
              'a-text': verifyCodeCountDown > 0
            })}
          >
            {
              verifyCodeCountDown > 0 ? `倒计时(${verifyCodeCountDown}s)` : '获取验证码'
            }
          </span>
        </button>
      }
    </div>
    {
      touched && error &&
      <p className="tip-input">{error}</p>
    }
  </div>
)

const VerifyCode = (props) => {
  const {sendSmsVerifyCode, verifyCodeCountDown} = props;
  return (
    <div>
      <Field name="phoneNum" type="text" placeholder="输入手机号" component={renderField} validate={[required('手机号'),phone]}/>
      <Field name="phoneCode" type="text" placeholder="输入验证码" component={renderField} validate={[required('验证码')]} vcode
             vcodeClickHandle={sendSmsVerifyCode} verifyCodeCountDown={verifyCodeCountDown}/>
    </div>
  )
}

export default VerifyCode
