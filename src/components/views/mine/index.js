/**
 * Created by Freeman on 2017/3/28.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'
import * as Actions from '../../../actions/index'
import user_pic from '../../../assets/img/user-pic.png'
import Footer from "../../commons/footer";
import {isLogin} from "../../../utils/userUtils";
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
class Mine extends Component {

  componentDidMount() {
    const {actions} = this.props
    if (isLogin()) {
      actions.updateUser()
    }
  }

  render() {
    const {auth} = this.props
    return (
      <div className="content-wrap">
        <div className="header-person">

          <div className="pic-user">
            <div className="pic-area-center"><img src={user_pic} alt=""/></div>
          </div>

          <div className="user-name"><span className="name">{auth.userInfo.username}</span></div>
        </div>
        <div className="row-line"/>

        <div className="main-content">
          <div className="main-content-list">

            <div className="content-list__item">
              <Link to="/mine/profile">
                <div className="box-item">
                  <span className="ico-left"><i className="ico p-ico"></i></span>
                  <span className="box-item__title">个人资料</span>
                  <span className="arrow-right"><i className="ico arrow-r"></i></span>
                </div>
              </Link>
            </div>

            <div className="content-list__item">
              <Link to="/mine/collection">
                <div className="box-item">
                  <span className="ico-left"><i className="ico sc-ico"></i></span>
                  <span className="box-item__title">我的收藏</span>
                  <span className="arrow-right"><i className="ico arrow-r"></i></span>
                </div>
              </Link>
            </div>

            <div className="content-list__item">
              <Link to="/mine/published">
                <div className="box-item">
                  <span className="ico-left"><i className="ico fb-ico"></i></span>
                  <span className="box-item__title">我的发布</span>
                  <span className="arrow-right"><i className="ico arrow-r"></i></span>
                </div>
              </Link>
            </div>

            <div className="content-list__item">
              <a href="">
                <div className="box-item">
                  <span className="ico-left"><i className="ico fx-ico"></i></span>
                  <span className="box-item__title">分享给好友</span>
                  <span className="arrow-right"><i className="ico arrow-r"></i></span>
                </div>
              </a>
            </div>

            <div className="content-list__item">
              <Link to="/mine/settings">
                <div className="box-item">
                  <span className="ico-left"><i className="ico sz-ico"></i></span>
                  <span className="box-item__title">设置</span>
                  <span className="arrow-right"><i className="ico arrow-r"></i></span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Footer  />
      </div>
    )
  }
}
Mine.propTypes = {
  auth: PropTypes.object,
  header: PropTypes.object,
  actions: PropTypes.object,
}
export default Mine
