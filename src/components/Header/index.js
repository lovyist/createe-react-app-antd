/**
 * Created by lovyist on 2017/3/29.
 */
import React from 'react';
import PropTypes from 'prop-types'
import {browserHistory} from 'react-router';
const Header = ({title, hasGoBack}) => (

  <div className="header-back">
    {
      hasGoBack &&
      <i className="go-back" onClick={() => browserHistory.goBack()}/>
    }
    <div className="header-back__title">{title}</div>
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
