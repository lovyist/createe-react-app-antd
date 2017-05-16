/**
 * Created by Freeman on 2017/5/16.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../actions'
import initHeader from "../../../utils/Header";
import { Link } from 'react-router'
const mapStateToProps = (state) => {
  return {
    //header: state.header
  }
}
const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(Actions, dispatch)
  }
)
@connect(mapStateToProps, mapDispatchToProps)
export default class Publish extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {actions} = this.props
    let header = {
      isShow: false,
    }
    actions.updateHeader(Object.assign({}, initHeader, header))
    actions.updateFooter()
  }

  render() {
    return (
      <div className="content-wrap">
        <div className="header-t"><span>选择发布分类</span></div>
        <div className="entry-second">
          <div className="entry-area color-r"><Link href="/recruit/publish">发布兼职招聘</Link></div>
          <div className="entry-area color-y "><a href="publish-second.html">发布旅游度假</a></div>
          <div className="entry-area color-b"><a href="publish-second.html">发布教育培训</a></div>
        </div>
      </div>
    )
  }
}
Publish.propTypes = {
  actions: PropTypes.object,
}
