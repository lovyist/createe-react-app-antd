/**
 * Created by freeman on 17-3-26.
 */
import React from 'react'
import {Link} from 'react-router'
import index_icon from '../../assets/img/index-ico1.png'
import publish_icon from '../../assets/img/index-ico2.png'
import me_icon from '../../assets/img/index-ico3.png'
const Footer = () => {

  return (
    <div className="footer">
      <Link to="/" activeClassName="active" onlyActiveOnIndex>
        <div className="f-ico">
          <img src={index_icon} alt=""/>
          <span>首页</span>
        </div>
      </Link>
      <Link to="/publish" activeClassName="active" onlyActiveOnIndex>
        <div className="f-ico">
          <img src={publish_icon} alt=""/>
          <span>发布</span>
        </div>
      </Link>
      <Link to="/mine" activeClassName="active" onlyActiveOnIndex>
        <div className="f-ico">
          <img src={me_icon} alt=""/>
          <span>我</span>
        </div>
      </Link>
    </div>
  )
}

export default Footer
