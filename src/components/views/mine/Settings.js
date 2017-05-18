/**
 * Created by Freeman on 2017/3/28.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../../actions/index'
import Header from "../../Header/index";
import {Link} from "react-router";
const mapStateToProps = (state) => {
  return {
    header: state.header
  }
}
const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(Actions, dispatch)
  }
)
@connect(mapStateToProps, mapDispatchToProps)
class Settings extends Component {
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount() {
  }

  logOut() {
    const {actions} = this.props
    actions.logout()
  }

  render() {
    return (
      <div className="content-wrap">
        <Header title="设置"/>
        <div className="main-content bg-setUp">
          <div className="main-content-list">
            <div className="content-list__item bg-setUp-item">
              <Link to="/forget">
                <div className="box-item">
                  <span className="box-item__title">更改密码</span>
                  <span className="arrow-right"><i className="ico arrow-r"></i></span>
                </div>
              </Link>
            </div>
            <div className="quit-login">
              <div className="input-area">
                <div className="register-button">
                  <input type="button" value="退出登录" onClick={this.logOut}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
Settings.propTypes = {
  header: PropTypes.object,
  actions: PropTypes.object,
}
export default Settings
