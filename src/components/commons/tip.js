/**
 * Created by Freeman on 2017/3/29.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Toast} from 'react-weui'

/**
 *  pop out indicator to inform users
 *
 */
class Tip extends Component {

  static propTypes = {
    msg: PropTypes.shape({
      show: PropTypes.bool,
      type:PropTypes.oneOf(['loading','success','warn']),
      text: PropTypes.string,
    }).isRequired
  };

  static defaultProps = {
    msg: {
      show: false,
      text: ''
    }
  };

  render() {
    let {msg :{show,type,text}} = this.props;
    let icon = 'success'
    if (type === 'loading'){
      icon = 'loading'
      text = 'Loading...'
    }else if (type==='success'){
      icon = 'success'
    }else if (type === 'warn'){
      icon = 'warn'
    }
    return (
      <Toast icon={icon} show={show} >{text}</Toast>
    );
  }
}

export default Tip;
