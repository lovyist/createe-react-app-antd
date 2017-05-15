/**
 * Created by freeman on 17-3-25.
 */
import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Actions from "../../../actions";
import initHeader from "../../../utils/Header";
import Carousel from "./Carousel";

import recruit from "../../../assets/img/01.png";
import tour from "../../../assets/img/02.png";
import education from "../../../assets/img/03.png";
import {Link} from "react-router";

import {formatDate} from '../../../utils/dateUtils'

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
class Index extends React.Component {

  constructor(props) {
    super(props)
    this.fetchIndexList = this.fetchIndexList.bind(this)
    this.fetchRecList = this.fetchRecList.bind(this)
    this.state = {
      carouselData: [],
      guessLike:[],
    }
  }

  componentDidMount() {
    const {actions} = this.props
    let header = {
      isShow:false,
    }
    actions.updateHeader(Object.assign({}, initHeader, header))
    actions.updateFooter()
    this.fetchIndexList()
    this.fetchRecList()

  }

  fetchIndexList() {
    const that = this
    fetch('/home/index/getIndexList', {
      method: "get",
      credentials: "include"
    })
      .then(res => res.json())
      .then(res => {
        that.setState({
          carouselData: res.data
        })
      })
  }
  fetchRecList() {
    const that = this
    fetch('/home/index/getRecList', {
      method: "get",
      credentials: "include"
    })
      .then(res => res.json())
      .then(res => {
        that.setState({
          guessLike: res.data
        })
      })
  }

  render() {
    return (
      <div className="content-wrap">
        <div className="header">
          <div className="search-box">
            <div className="search-content">
              <span className="search-icon"/>
              <div className="search-input"/>
            </div>
          </div>
        </div>
        {
          this.state.carouselData.length > 0 && <Carousel data={this.state.carouselData}/>
        }
        <div className="fast-entry">
          <div className="entry-recruit"><a href=""><img src={recruit} alt=""/></a></div>
          <div className="entry-tour"><a href=""><img src={tour} alt=""/></a></div>
          <div className="entry-education"><a href=""><img src={education} alt=""/></a></div>
        </div>
        <div className="guess-like">
          <h2 className="title">猜你喜欢</h2>
          <div className="pro-list">
            <ul className="list-items">
              {
                this.state.guessLike.map(rec =>(
                  <li className="list-item" key={rec.infoId}>
                    <Link to={`/`}>
                      <div className="pic"><img src={rec.image} alt=""/></div>
                      <div className="message">
                        <h3 className="m-title">{rec.title}</h3>
                        <div className="m-content">{rec.content}</div>
                        <div className="m-info">
                          <span className="time"><i className="ico"/>{formatDate(rec.createdTime)}</span>
                          <span className="money"><i className="ico"/>200元</span>
                          <span className="num"><i className="ico"/>100</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  header: PropTypes.object,
  actions: PropTypes.object,
}

export default Index
