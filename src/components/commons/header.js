/**
 * Created by freeman on 17-3-26.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import classNames from 'classnames';
class Header extends React.Component {
  render() {
    const {
      title,
      isShowBack,
      isShowMore,
      onClickMore,
      moreItem
    } = this.props;
    return (
      <div className="header-back">
        <i className={classNames('go-back', {'display-none': !isShowBack})} onClick={() => {
          browserHistory.goBack()
        }}/>
        <div className="header-back__title">{title}</div>
        <div className={classNames('vux-header-right', {'display-none': !isShowMore})}
             onClick={onClickMore}
        >
          {
            moreItem ? moreItem : <button>注册</button>
          }
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  isShowBack: PropTypes.bool,
  isShowMore: PropTypes.bool,
  onClickMore: PropTypes.func,
  moreItem: PropTypes.node,
}

Header.defaultProps = {
  isShowBack: false,
  isShowMore: false,
}

export default Header;
