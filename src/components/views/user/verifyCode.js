import React from 'react';
import classNames from 'classnames'
import {Field} from 'redux-form'
export const renderField = prs => (
  <div className="area">
    <div className="input-area">
      <input type={prs.type} placeholder={prs.placeholder} {...prs.input}
             className={classNames({'text-yzm': prs.vcode})}/>
      {
        prs.vcode &&
        <button type="button" className="btn-yzm" onClick={prs.vcodeClickHandle} disabled={prs.verifyCodeCountDown > 0}>
          <span
            className={classNames({
              'f-text': prs.verifyCodeCountDown === 0,
              'a-text': prs.verifyCodeCountDown > 0
            })}
          >
            {
              prs.verifyCodeCountDown > 0 ? `倒计时(${prs.verifyCodeCountDown}s)` : '获取验证码'
            }
          </span>
        </button>
      }
    </div>
    <p className="tip-input">10分钟之内有效</p>
  </div>
)

const VerifyCode = (props) => {
  const {sendSmsVerifyCode, verifyCodeCountDown} = props;
  return (
    <div>
      <Field name="phoneNum" type="text" placeholder="输入手机号" component={renderField}/>
      <Field name="phoneCode" type="text" placeholder="输入验证码" component={renderField} vcode
             vcodeClickHandle={sendSmsVerifyCode} verifyCodeCountDown={verifyCodeCountDown}/>
    </div>
  )
}

export default VerifyCode
