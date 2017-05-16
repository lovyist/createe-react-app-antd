/**
 * Created by Freeman on 2017/5/16.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../actions'
import initHeader from '../../../utils/Header'
import {
  ButtonArea,
  Button,
  CellHeader,
  CellBody,
  Form,
  FormCell,
  Input,
  Label,
  TextArea,
  Select,
  CityPicker,
  Uploader,
} from 'react-weui'
import {renderInputField} from '../../commons/render'
import {Field} from 'redux-form'
import cnCity from '../../../constants/cnCity'
import PublishForm from './PublishForm'
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
class Publish extends Component {

  constructor (props) {
    super(props)
    this.fetchCatList = this.fetchCatList.bind(this)
    this.state = {
      city_show:false,
      city_value:'',
      catList: [],
      demoFiles: [],
    }
  }

  componentDidMount () {
    const {actions} = this.props
    let header = {
      isShow: false,
    }
    actions.updateHeader(Object.assign({}, initHeader, header))
    actions.updateFooter()
    this.fetchCatList()

  }

  fetchCatList () {
    const that = this
    fetch(`/cat/Index/getCatList?type=recruit`, {
      method: 'get',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        that.setState({
          catList: res.data
        })
      })
  }

  submit = (values) => {
    // Do something with the form values
    console.log(values);
  }

  render () {
    const that = this
    return (
      <div className="content-wrap">
        <PublishForm onSubmit={this.submit} catList={this.state.catList}/>
        <Form method="POST" action="http://127.0.0.1:8800/recruit/index/Publish" acceptCharset="UTF-8"
              encType="multipart/form-data">




        </Form>

      </div>
    )
  }
}

Publish.propTypes = {
  actions: PropTypes.object,
}

export default Publish



