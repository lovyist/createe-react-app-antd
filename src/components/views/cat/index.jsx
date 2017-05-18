import React, {Component} from 'react';
import Header from "../../Header";
import Carousel from "../../commons/Carousel";
import {Link} from "react-router";
export default class Index extends Component {
  constructor (props) {
    super(props)
    this.fetchCatList = this.fetchCatList.bind(this)
    this.fetchRecList = this.fetchRecList.bind(this)
    this.state = {
      catList: [],
      carouselData: [],
    }
  }

  componentDidMount () {
    this.fetchCatList()
    this.fetchRecList()
  }

  fetchCatList () {
    const {params:{type}} = this.props
    fetch(`/cat/Index/getCatList?type=${type}`, {
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
  fetchRecList () {
    const {params:{type}} = this.props
    fetch(`/${type}/index/getRecList`, {
      method: 'get',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          carouselData: res.data
        })
      })
  }
    render() {
      const {params:{type}} = this.props
        return (
          <div className="content-wrap">
            <Header title={type==='recruit'?'招聘兼职':type==='travel'?'旅游度假':'教育培训'} />
            <div className="main-content">
              {
                this.state.carouselData.length > 0 && <Carousel data={this.state.carouselData}/>
              }
              <div className="entry-third">
                <ul>
                  {
                    this.state.catList.map(cat =>
                      <li className="button-entry" key={cat.catId}><Link to={`/cat/${type}/${cat.catId}`} className="color-p">{cat.catName}</Link></li>
                    )
                  }
                </ul>
              </div>
            </div>
          </div>
        )
    }
}
Index.propTypes = {}
Index.defaultProps = {}
