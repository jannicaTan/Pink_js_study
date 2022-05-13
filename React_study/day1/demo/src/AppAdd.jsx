import React, { Component } from 'react'

export default class AppAdd extends Component {
  state={
    num:0
  }
  render() {
    return (
      <div>
        <p>{this.state.num}</p>
        <button onClick={this.addNum.bind(this)}>+1</button>
      </div>
    )
  }
  addNum(){
    this.setState({
      // num:this.state.num+1
      // 这样会报错直接修改state
      // num:this.state.num++
    })
  }
}
