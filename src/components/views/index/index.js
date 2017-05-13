/**
 * Created by freeman on 17-3-25.
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../../actions'
import initHeader from '../../../utils/Header'
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

  componentDidMount() {
    const {actions} = this.props
    let header = {
      title: '首页',
    }
    actions.updateHeader(Object.assign({}, initHeader, header))
    actions.updateFooter()
  }

  render() {
    return (
      <div className="jx-top-con">
        {navigator.userAgent}
      </div>
    )
  }
}

Index.propTypes = {
  header: React.PropTypes.object,
  actions: React.PropTypes.object,
}

export default Index
