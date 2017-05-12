import React from 'react';
import WeUI from 'react-weui';
const {CellBody, CellFooter, FormCell, Input, Button} = WeUI;
import {Field} from 'redux-form'
export const renderField = prs => (
  <FormCell>
    <CellBody>
      <Input type={prs.type} placeholder={prs.placeholder} {...prs.input} />
    </CellBody>
    {
      prs.vcode &&
      <CellFooter>
        <Button type="primary" size="small" disabled={prs.verifyCodeCountDown > 0}
                onClick={prs.vcodeClickHandle}>{prs.verifyCodeCountDown > 0 ? `${prs.verifyCodeCountDown}秒后重新获取` : '获取验证码'}</Button>
      </CellFooter>
    }
  </FormCell>
)

const VerifyCode = (props) => {
  const {sendSmsVerifyCode, verifyCodeCountDown} = props;
  return (
    <div>
      <Field name="username" type="tel" placeholder="输入手机号" component={renderField}/>
      <Field name="verifyCode" type="number" placeholder="输入验证码" component={renderField} vcode
             vcodeClickHandle={sendSmsVerifyCode} verifyCodeCountDown={verifyCodeCountDown}/>
    </div>
  )
}

export default VerifyCode
