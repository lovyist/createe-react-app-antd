/**
 * Created by Freeman on 2017/5/20.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs'
class Collect extends Component {
  constructor (props) {
    super(props)
    this.handleToggleCollect = this.handleToggleCollect.bind(this)
    this.state = {
      isColl:props.isColl,
    }
  }

  handleToggleCollect(isColl){
    const {catId,infoId,} = this.props
    fetch('/user/center/coll',{
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: qs.stringify({
        catId,
        infoId,
        type:isColl,
      }),
      credentials: "include"
    }).then(res =>res.json())
      .then(res =>{
          if(res.errNo===0 ){
            this.setState({
              isColl
            })
          }
      })
  }

  render () {
    return (
      <a className="f-xq__item" onClick={() =>this.handleToggleCollect(this.state.isColl==='1'?'0':'1')}>
        <div className="f-ico">
          {
            this.state.isColl==='1' ? <span>已收藏</span>: <span>收藏</span>
          }
        </div>
      </a>
    )
  }
}
Collect.propTypes = {
  catId:PropTypes.string.isRequired,
  infoId:PropTypes.string.isRequired,
  isColl:PropTypes.string.isRequired,
}
export default Collect
