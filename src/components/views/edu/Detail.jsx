/**
 * Created by freeman on 17-5-15.
 */

import React, { Component } from 'react'
import {formatDate} from "../../../utils/dateUtils";
import Header from "../../Header/index";

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.fetchDetail = this.fetchDetail.bind(this)
    this.state = {
      detail: {},
    }
  }

  componentDidMount() {
    this.fetchDetail()

  }

  fetchDetail() {
    const {params: {id}} = this.props
    const that = this
    fetch(`/edu/index/getEduInfo?infoId=${id}`, {
      method: "get",
      credentials: "include"
    })
      .then(res => res.json())
      .then(res => {
        that.setState({
          detail: res.data
        })
      })
  }

  render() {
    return (
      <div className="content-wrap">
        <Header title={'教育详情'}/>
        <div className="main-content scroll-list">
          <div className="main-box">
            <div className="xq-pic"><img src={`/${this.state.detail.image}`} alt=""/></div>
            <div className="xq-title">
              <p>{this.state.detail.content}</p>
              <div className="mes-box">
                <span className="time"><i className="ico"></i>{formatDate(this.state.detail.createdTime)}</span>
                <span className="money"><i className="ico"></i>{this.state.detail.price}元</span>
                <span className="num"><i className="ico"></i>{this.state.detail.viewCnt}</span>
              </div>
            </div>
            <div className="row-line"/>
            <div className="details-info">
              <div className="details-info__item">
                <span className="info-name">价格：</span>
                <span className="info-content">{this.state.detail.price}元</span>
              </div>
              <div className="details-info__item">
                <span className="info-name">开始日期：</span>
                <span className="info-content">{this.state.detail.startDate}</span>
              </div>
              <div className="details-info__item">
                <span className="info-name">结束日期：</span>
                <span className="info-content">{this.state.detail.endDate}</span>
              </div>
              <div className="details-info__item">
                <span className="info-name">上课时间：</span>
                <span className="info-content">{this.state.detail.startTime}</span>
              </div>
              <div className="details-info__item">
                <span className="info-name">下课时间：</span>
                <span className="info-content">{this.state.detail.endTime}</span>
              </div>
              <div className="details-info__item">
                <span className="info-name">创建时间：</span>
                <span className="info-content">{formatDate(this.state.detail.createdTime)}</span>
              </div>
              {/*<div className="details-info__item">
                <span className="info-name">更新时间：</span>
                <span className="info-content">{this.state.detail.number}</span>
              </div>*/}
              <div className="details-info__item">
                <span className="info-name">联系人：</span>
                <span className="info-content">{this.state.detail.contact}</span>
              </div>
              <div className="details-info__item">
                <span className="info-name">联系电话：</span>
                <span className="info-content">{this.state.detail.phoneNum}</span>
              </div>
              <div className="details-info__item">
                <span className="info-name">备注：</span>
                <span className="info-content area-block">{this.state.detail.extra}</span>
              </div>
            </div>
            <div className="row-line"></div>
            <div className="comment-box">
              <h2 className="comment-title">评论区</h2>
              <div className="comment-box__list">
                <div className="comment-list__item">
                  <div className="comment-header">
                    <div className="asset-meta">
                      <p>
                        <span className="byline"><span className="author">Jim</span>说：</span>
                      </p>
                    </div>
                  </div>
                  <div className="comment-content">
                    <p>很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!</p>
                  </div>
                  <div className="comment-footer">
                    <p>2017-05-08 12:15:33</p>
                  </div>
                </div>
                <div className="comment-list__item">
                  <div className="comment-header">
                    <div className="asset-meta">
                      <p>
                        <span className="byline"><span className="author">Jim</span>说：</span>
                      </p>
                    </div>
                  </div>
                  <div className="comment-content">
                    <p>很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!</p>
                  </div>
                  <div className="comment-footer">
                    <p>2017-05-08 12:15:33</p>
                  </div>
                </div>
                <div className="comment-list__item">
                  <div className="comment-header">
                    <div className="asset-meta">
                      <p>
                        <span className="byline"><span className="author">Jim</span>说：</span>
                      </p>
                    </div>
                  </div>
                  <div className="comment-content">
                    <p>很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!</p>
                  </div>
                  <div className="comment-footer">
                    <p>2017-05-08 12:15:33</p>
                  </div>
                </div>
                <div className="comment-list__item">
                  <div className="comment-header">
                    <div className="asset-meta">
                      <p>
                        <span className="byline"><span className="author">Jim</span>说：</span>
                      </p>
                    </div>
                  </div>
                  <div className="comment-content">
                    <p>很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!很有用!</p>
                  </div>
                  <div className="comment-footer">
                    <p>2017-05-08 12:15:33</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="comment-input">
              <h4 className="comment-input__title">评论：</h4>
              <div className="comment-input__content"><input type="" placeholder="说点什么..."/></div>
              <div className="comment-published__button"><button>提交</button></div>
            </div>
          </div>
        </div>

        <div className="footer f-xq">
          <a href="" className="f-xq__item"><div className="f-ico"><span>收藏</span><span className="text-hid">已收藏</span></div></a>
          <a href="" className="f-xq__item"><div className="f-ico"><span>评论</span></div></a>
        </div>
      </div>
    )
  }
}
