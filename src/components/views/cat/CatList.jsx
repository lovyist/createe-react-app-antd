import React, {Component} from 'react';
import Header from "../../Header/index";
import {Link} from "react-router";
import {formatDate} from "../../../utils/dateUtils";

export default class CatList extends Component {
  constructor(props) {
    super(props)
    this.fetchCatList = this.fetchCatList.bind(this)
    this.state = {
      catList: [],
    }
  }

  componentDidMount() {
    this.fetchCatList()
  }

  fetchCatList() {
    const {params: {type, catId}} = this.props
    let url = ``
    if (type === 'recruit') {
      url = '/recruit/index/getRecruitList'
    } else if (type === 'travel') {
      url = '/travel/index/getTravelList'
    } else if (type === 'edu') {
      url = '/edu/index/getRecList'
    }
    fetch(`${url}?catId=${catId}`, {
      method: 'get',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          catList: res.data
        })
      })
  }

  render() {
    const {params: {type}} = this.props
    return (
      <div className="content-wrap">
        <Header title={this.state.catList[0] ? this.state.catList[0].catName : ''}/>
        <div className="pro-list scroll-list">
          <ul>
            {
              this.state.catList.map(item =>
                <li className="list-item" key={item.infoId}>
                  <Link to={`/${type}/detail/${item.infoId}`}>
                    <div className="pic"><img src={`/${item.image}`} alt=""/></div>
                    <div className="message">
                      <h3 className="m-title">{item.title}</h3>
                      <div className="m-content">{item.content}</div>
                      <div className="m-info">
                        <span className="time"><i className="ico"></i>{formatDate(item.createdTime)}</span>
                        <span className="money"><i className="ico"></i>{item.price}元</span>
                        <span className="num"><i className="ico"></i>{item.viewCnt}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}
