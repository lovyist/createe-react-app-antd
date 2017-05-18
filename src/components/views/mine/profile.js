/**
 * Created by Freeman on 2017/3/28.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../../actions/index'
import Header from "../../Header/index";
import user_pic from '../../../assets/img/user-pic.png'
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}
const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(Actions, dispatch)
  }
)
@connect(mapStateToProps, mapDispatchToProps)
class Profile extends Component {
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    const {actions} = this.props
    actions.logout()
  }

  render() {
    const {auth} = this.props
    return (
      <div className="content-wrap">
        <Header title="个人资料"/>
        <div className="row-line"></div>
        <div className="header-person">
          <div className="pic-user">
            <div className="pic-area-center"><img src={user_pic} alt=""/></div>
          </div>
        </div>
        <div className="row-line"></div>
        <div className="personal-msg">
          <h2 className="comment-title">个人资料</h2>
          <div className="personal-msg__item">
            <span className="pm-title">昵称：</span>
            <span className="pm-content">{auth.userInfo.username}</span>
          </div>
          <div className="personal-msg__item">
            <span className="pm-title">手机号：</span>
            <span className="pm-content">{auth.userInfo.phoneNum}</span>
          </div>
          <div className="personal-msg__item">
            <span className="pm-title">注册时间：</span>
            <span className="pm-content">{auth.userInfo.birthDay}</span>
          </div>
        </div>
      </div>
    )
  }
}
Profile.propTypes = {
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object,
}
export default Profile
