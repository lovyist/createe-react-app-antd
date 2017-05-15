/**
 * Created by lovyist on 2017/3/29.
 */
import React from 'react';
import PropTypes from 'prop-types'
import { browserHistory, Link } from 'react-router';
const Header = ({title, hasGoBack}) => (
    <div className="nav-top-p">
        {
            hasGoBack &&
            <div className="icon-back" onClick={() => {
        browserHistory.goBack()
      }}>
                <span></span>
                <p className="goBack">返回</p>
            </div>
        }
        <div className="nav-top-title"><span className="title-mi">米饭&nbsp;-&nbsp;</span><span
            className="opera-title">{title}</span></div>
        <div className="icon-home"><Link to="/"><span></span></Link></div>
    </div>
)

Header.propTypes = {
    title: PropTypes.string.isRequired,
    hasGoBack: PropTypes.bool
}

Header.defaultProps = {
    hasGoBack: true
}

export default Header;
