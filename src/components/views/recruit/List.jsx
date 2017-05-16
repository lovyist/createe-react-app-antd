import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../actions'
import initHeader from '../../../utils/Header'
import {Link} from "react-router";
const mapStateToProps = (state) => {
  return {
    header: state.header
  }
}
const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(Actions, dispatch)
  }
)
@connect(mapStateToProps, mapDispatchToProps)
export default class List extends Component {
  constructor (props) {
    super(props)
    this.fetchRecruitList = this.fetchRecruitList.bind(this)
    this.state = {
      city_show:false,
      city_value:'',
      recruitList: [],
    }
  }

  componentDidMount () {
    const {actions} = this.props
    let header = {
      isShow: false,
    }
    actions.updateHeader(Object.assign({}, initHeader, header))
    actions.updateFooter()
    this.fetchRecruitList()

  }

  fetchRecruitList () {
    const that = this
    fetch(`/recruit/index/getRecruitList?catId=6&page=1`, {
      method: 'get',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        that.setState({
          recruitList: res.data
        })
      })
  }
    render() {
        return (
          <div className="content-wrap">
            <div className="header-back">
              <i className="go-back"></i>
              <div className="header-back__title">特价游</div>
            </div>
            <div className="pro-list scroll-list">
              <ul>
                {
                  this.state.recruitList.map(item =>(
                    <li className="list-item" key={item.infoId}>
                      <Link to={`/recruit/${item.infoId}`}>
                        <div className="pic"><img src={item.image} alt=""/></div>
                        <div className="message">
                          <h3 className="m-title">{item.title}</h3>
                          <div className="m-content">{item.content}</div>
                          <div className="m-info">
                            <span className="time"><i className="ico"></i>2017-03-05</span>
                            <span className="money"><i className="ico"></i>200元</span>
                            <span className="num"><i className="ico"></i>100</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        )
    }
}
List.propTypes = {
  actions: PropTypes.object,
}
