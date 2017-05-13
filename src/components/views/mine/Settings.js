/**
 * Created by Freeman on 2017/3/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Cell, CellBody, Cells} from 'react-weui'
import * as Actions from '../../../actions/index'
import {backHeader} from '../../../utils/Header'
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
class Settings extends Component {
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount() {
    const {actions} = this.props
    let header = {
      isShowBack: true,
      title: '设置',
      isMore: false
    }
    actions.updateHeader(Object.assign({}, backHeader, header))
    actions.updateFooter(false)
  }

  logOut() {
    const {actions} = this.props
    actions.logout()
  }

  render() {
    return (
      <div className="jx-top-con">
        <Cells>
          <Cell>
            <CellBody>
              <a className="exit" onClick={this.logOut}>退出登录</a>
            </CellBody>
          </Cell>
        </Cells>
      </div>
    )
  }
}
Settings.propTypes = {
  header: React.PropTypes.object,
  actions: React.PropTypes.object,
}
export default Settings
