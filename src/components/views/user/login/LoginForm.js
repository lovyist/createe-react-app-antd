/**
 * Created by Freeman on 2017/3/27.
 */
import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux';
import classNames from 'classnames';
import userUtils from '../../../../utils/userUtils';
import { required } from '../../../../utils/validateRules'


const renderField = prs => (

  <div className={classNames({'account-num':prs.type==='text','account-paw':prs.type==='password'})}>
    <i className={classNames({'ico-account-num':prs.type==='text','ico-account-paw':prs.type==='password'})}/>
    <input type={prs.type} placeholder={prs.placeholder} {...prs.input} />
  </div>
)

let LoginForm = (props) => {
  const {handleSubmit, invalid, submitting} = props

  return (
    <form onSubmit={handleSubmit}>
      <div className="account-info">
        <Field name="username" type="text" placeholder="手机号码/账号" component={renderField} validate={[required('手机号码/账号')]}/>
        <Field name="password" type="password" placeholder="账户密码" component={renderField} validate={[required('账户密码')]}/>
      </div>
      <div className="login-button">
        <input disabled={ invalid || submitting } type="submit" value="登录"/>
      </div>
    </form>
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
LoginForm = reduxForm({
  form: 'login',
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
