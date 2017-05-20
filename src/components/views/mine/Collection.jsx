/**
 * Created by freeman on 17-5-18.
 */

import React, {Component} from 'react';
import classNames from 'classnames';
import qs from 'qs'
import Footer from "../../commons/footer";
import Header from "../../Header/index";
import WeUI from 'react-weui';
const {InfiniteLoader} = WeUI;
export default class Collection extends Component {
  constructor(props) {
    super(props)
    this.fetchCatList = this.fetchCatList.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.fetchCollectionList = this.fetchCollectionList.bind(this)
    this.fetchMoreCollectionList = this.fetchMoreCollectionList.bind(this)
    this.handleDeleteCollection = this.handleDeleteCollection.bind(this)
    this.state = {
      type: 'recruit',
      page: 1,
      fetching: false,
      collectionData: [],
    }
  }

  componentDidMount() {
    this.fetchCatList()
  }

  fetchCatList() {
    fetch(`/user/center/getCollList?type=${this.state.type}&page=${this.state.page}`, {
      method: 'get',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          collectionData: res.data
        })
      })
  }

  handleToggle(type) {
    this.setState({
      type,
      page: 1,
    }, () => this.fetchCatList())
  }

  fetchMoreCollectionList(resolve, finish) {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.fetchCollectionList(resolve, finish)
    })
  }

  fetchCollectionList(resolve, finish) {
    this.setState({fetching: !this.state.fetching})
    fetch(`/user/center/getCollList?type=${this.state.type}&page=${this.state.page}`, {
      method: 'get',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({fetching: !this.state.fetching})
        if (res.data.length === 0) {
          finish()
        } else {
          this.setState({
            collectionData: this.state.collectionData.concat(res.data)
          }, () => {
            resolve ? resolve() : () => {
            }
          })
        }
        this.setState({
          collectionData: res.data
        })
      })
  }


  handleDeleteCollection(infoId,catId){
    fetch('/user/center/coll',{
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: qs.stringify({
        catId,
        infoId,
        type:0,
      }),
      credentials: "include"
    }).then(res =>res.json())
      .then(res =>{
        if(res.errNo===0 ){
          this.fetchCatList()
        }
      })
  }

  render() {
    return (
      <div className="content-wrap">
        <Header title="我的收藏"/>
        <div className="comment-box scroll-list">
          <div className="main-content box-fixed">
            <ul className="tab-title">
              <li className="tab-list__item tit-interval" onClick={() => this.handleToggle('recruit')}>
                <span className={classNames({'active': this.state.type === 'recruit'})}>兼职招聘</span>
              </li>
              <li className="tab-list__item tit-interval" onClick={() => this.handleToggle('travel')}>
                <span className={classNames({'active': this.state.type === 'travel'})}>旅游度假</span>
              </li>
              <li className="tab-list__item" onClick={() => this.handleToggle('edu')}>
                <span className={classNames({'active': this.state.type === 'edu'})}>教育培训</span>
              </li>
            </ul>
            {
              this.state.collectionData.length > 0 ?
                <InfiniteLoader height="90vh" onLoadMore={this.fetchMoreCollectionList}>
                  <div className="tab-content part-time-job ">
                    <ul className="tab-content-list">
                      {
                        this.state.collectionData.map(coll =>
                          <li className="tab-content__item" key={coll.infoId}>
                            <a>
                              <span className="type-published">{coll.title}</span>
                              <span className="main-message">{coll.content}</span>
                            </a>
                            <span className="btn-cancel" onClick={() =>this.handleDeleteCollection(coll.infoId,coll.catId)}><i></i></span>
                          </li>
                        )
                      }
                    </ul>
                  </div>
                </InfiniteLoader>
                :
                <div className="tip-friendship">收藏空空~~~</div>
            }

          </div>
        </div>

        <Footer/>
      </div>
    )
  }
}
