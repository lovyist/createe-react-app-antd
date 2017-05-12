/**
 * Created by Freeman on 2017/3/27.
 */
import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux';
import classNames from 'classnames';
import WeUI from 'react-weui'
const {ButtonArea, CellBody, Form, FormCell, Input} = WeUI
import userUtils from '../../../../utils/userUtils';
const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  console.log(errors)
  return errors
}

const renderField = prs => (
  <FormCell>
    <CellBody>
      <Input type={prs.type} placeholder={prs.placeholder} {...prs.input} />
    </CellBody>
  </FormCell>
)

let LoginForm = (props) => {
  const {handleSubmit, invalid, submitting} = props

  return (
    <form onSubmit={handleSubmit}>
      <Form className="jx-ipt-wrap" noValidate>
        <Field name="username" type="tel" placeholder="输入手机号" component={renderField}/>
        <Field name="password" type="password" placeholder="输入密码(6位以上)" component={renderField}/>
      </Form>
      <ButtonArea>
        <button className={classNames('weui-btn', {
          'weui-btn_primary': !invalid,
          'weui-btn_default weui-btn_disabled': invalid || submitting
        })} disabled={ invalid || submitting } type="submit">
          登录
        </button>
      </ButtonArea>
    </form>
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
LoginForm = reduxForm({
  form: 'login',
  validate,
})(LoginForm)

// You have to connect() to any reducers that you wish to connect to yourself
LoginForm = connect(
  state => ({
    initialValues: {
      username: userUtils.getLastUsePhone()
    }
  }),
)(LoginForm)

export default LoginForm;
