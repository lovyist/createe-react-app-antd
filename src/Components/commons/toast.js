/**
 * Created by Freeman on 2017/3/29.
 */
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import {Mask, Icon} from 'react-weui'

/**
 *  pop out indicator to inform users
 *
 */
class Toast extends Component {

  static propTypes = {
    msg: PropTypes.shape({
      isTip: PropTypes.bool,
      isLoading: PropTypes.bool,
      tipText: PropTypes.string,
    }).isRequired
  };

  static defaultProps = {
    msg: {
      isTip: false,
      isLoading: false,
      tipText: ''
    }
  };

  render() {
    const {className, msg} = this.props;
    const cls = classNames('weui-toast', {
      [className]: className
    });
    return (
      <div style={{display: msg.isLoading || msg.isTip ? 'block' : 'none'}}>
        <Mask transparent={true}/>
        <div className={cls} style={{minHeight: '0'}}>
          {
            msg.isLoading && <Icon value="loading" className="weui-icon_toast"/>
          }
          <p className="weui-toast_content">{msg.tipText}</p>
        </div>
      </div>
    );
  }
}

export default Toast;
