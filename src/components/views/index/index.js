/**
 * Created by freeman on 17-3-25.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../actions'
import initHeader from '../../../utils/Header'
import Carousel from '../../commons/Carousel'

import recruit from '../../../assets/img/01.png'
import tour from '../../../assets/img/02.png'
import education from '../../../assets/img/03.png'
import { Link } from 'react-router'
import WeUI from 'react-weui'
const  { InfiniteLoader } = WeUI;
import { formatDate } from '../../../utils/dateUtils'
import Footer from "../../commons/footer";
import Header from "../../Header/index";

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

  constructor (props) {
    super(props)
    this.fetchIndexList = this.fetchIndexList.bind(this)
    this.fetchRecList = this.fetchRecList.bind(this)
    this.fetchMoreRecList = this.fetchMoreRecList.bind(this)
    this.state = {
      carouselData: [],
      guessLike: [],
      page: 1,
      fetching: false,
    }
  }

  componentDidMount () {
    const {actions} = this.props
    let header = {
      isShow: false,
    }
    actions.updateHeader(Object.assign({}, initHeader, header))
    actions.updateFooter()
    this.fetchIndexList()
    this.fetchRecList()

  }

  fetchIndexList () {
    const that = this
    fetch('/home/index/getIndexList', {
      method: 'get',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        that.setState({
          carouselData: res.data
        })
      })
  }

  fetchRecList (resolve, finish) {
    const that = this
    const {actions} = this.props
    this.setState({fetching: !this.state.fetching})
    fetch(`/home/index/getRecList?size=1&page=${this.state.page}`, {
      method: 'get',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({fetching: !this.state.fetching})
        if (res.data.length === 0) {
          finish()
        } else {
          that.setState({
            guessLike: this.state.guessLike.concat(res.data)
          }, () => {resolve ? resolve() : () => {}})
        }
      })
      .catch(err =>{
        actions.warnTip(err.message)
      })
  }

  fetchMoreRecList (resolve, finish) {
    this.setState({
      page: this.state.page + 1
    }, () => {this.fetchRecList(resolve, finish)})
  }

  render () {
    return (
      <div className="content-wrap">
        <InfiniteLoader height="90vh" onLoadMore={this.fetchMoreRecList}>
          <Header title={ '首页'} hasGoBack={false}/>
          {
            this.state.carouselData.length > 0 && <Carousel data={this.state.carouselData}/>
          }
          <div className="fast-entry">
            <div className="entry-recruit"><Link to="/cat/recruit"><img src={recruit} alt=""/></Link></div>
            <div className="entry-tour"><Link to="/cat/travel"><img src={tour} alt=""/></Link></div>
            <div className="entry-education"><Link to="/cat/edu"><img src={education} alt=""/></Link></div>
          </div>

          <div className="guess-like">
            <h2 className="title">猜你喜欢</h2>
            <div className="pro-list">
              <ul className="list-items">
                {
                  this.state.guessLike.map(rec => (
                    <li className="list-item" key={rec.infoId}>
                      <Link to={`/${rec.parentId==='1'?'recruit':rec.parentId==='2'?'travel':'edu'}/detail/${rec.infoId}`}>
                        <div className="pic"><img src={rec.image} alt=""/></div>
                        <div className="message">
                          <h3 className="m-title">{rec.title}</h3>
                          <div className="m-content">{rec.content}</div>
                          <div className="m-info">
                            <span className="time"><i className="ico"/>{formatDate(rec.createdTime)}</span>
                            <span className="money"><i className="ico"/>{rec.price}元</span>
                            <span className="num"><i className="ico"/>{rec.viewCnt}</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </InfiniteLoader>
        <Footer  />
      </div>
    )
  }
}

Index.propTypes = {
  header: PropTypes.object,
  actions: PropTypes.object,
}

export default Index
