/**
 * Created by freeman on 17-5-15.
 */

import React, {Component} from 'react';
import initHeader from "../../../utils/Header";
export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.fetchDetail = this.fetchDetail.bind(this)
    this.state = {
      detail: {},
    }
  }

  componentDidMount() {
    const {actions} = this.props
    let header = {
      isShow: false,
    }
    actions.updateHeader(Object.assign({}, initHeader, header))
    actions.updateFooter()
    this.fetchDetail()

  }

  fetchDetail() {
    const {params: {id}} = this.props
    const that = this
    fetch(`/recruit/index/getRecruitInfo?infoId=${id}`, {
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
      <div>

      </div>
    )
  }
}
Detail.propTypes = {}
