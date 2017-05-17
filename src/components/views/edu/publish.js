/**
 * Created by Freeman on 2017/5/16.
 */
import React, { Component } from 'react'
import PublishForm from './PublishForm'
import { browserHistory } from 'react-router'
class Publish extends Component {

  constructor (props) {
    super(props)
    this.fetchCatList = this.fetchCatList.bind(this)
    this.state = {
      catList: [],
    }
  }

  componentDidMount () {
    this.fetchCatList()

  }

  fetchCatList () {
    const that = this
    fetch(`/cat/Index/getCatList?type=edu`, {
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
    let formData  = new FormData();

    for(let name in values) {
      formData.append(name, values[name]);
    }
    fetch('/edu/index/publish',{
      method: "POST",
      body: formData,
      credentials: "include"
    }).then(res =>res.json())
      .then(res =>{
        console.log(res)
        if (res.errNo === 0){
          browserHistory.push(`/edu/detail/${res.data.infoId}`)
        }else {
          alert(res.errMsg)
        }
      })
  }

  render () {
    return (
      <div className="content-wrap">
        <PublishForm onSubmit={this.submit} catList={this.state.catList}/>
      </div>
    )
  }
}


export default Publish



