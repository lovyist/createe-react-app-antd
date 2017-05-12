/**
 * Created by freeman on 17-3-26.
 */
import React, {PropTypes} from 'react';
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
      <div className="vux-header-box">
        <div className="vux-header">
          <div className={classNames('vux-header-left', {'display-none': !isShowBack})}
               onClick={() => {
                 browserHistory.goBack()
               }}
          >
            <a className="vux-header-back"/>
            <div className="left-arrow"/>
          </div>
          <h1 className="vux-header-title">
            <span>{title}</span>
          </h1>
          <div className={classNames('vux-header-right', {'display-none': !isShowMore})}
               onClick={onClickMore}
          >
            {
              moreItem ? moreItem : <button>注册</button>
            }
          </div>
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
