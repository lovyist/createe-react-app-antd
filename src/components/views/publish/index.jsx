/**
 * Created by Freeman on 2017/5/16.
 */
import React, {Component} from 'react';

import { Link } from 'react-router'
export default class Publish extends Component {

  render() {
    return (
      <div className="content-wrap">
        <div className="header-t"><span>选择发布分类</span></div>
        <div className="entry-second">
          <div className="entry-area color-r"><Link to="/recruit/publish">发布兼职招聘</Link></div>
          <div className="entry-area color-y "><Link to="/travel/publish">发布旅游度假</Link></div>
          <div className="entry-area color-b"><Link to="/edu/publish">发布教育培训</Link></div>
        </div>
      </div>
    )
  }
}
