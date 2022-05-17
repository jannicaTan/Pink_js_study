import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class context extends Component {
  // 1.定义类型
  static childContextTypes={
    num: PropTypes.number
  }
  // 2.获取
  getChildContext(){
    return{
      num:this.state.num
    }
  }
  state={
    num:555
  }
  render() {
    return (
      <div>
        <Son></Son>
        <p>{this.state.num}</p>
      </div>
    )
  }
}

class Son extends Component {
  render() {
    return (
      <div>
        <GrandSon></GrandSon>
      </div>
    );
  }
}
class GrandSon extends Component {
    // 1.定义类型
    static contextTypes={
      num: PropTypes.number
    }
  render() {
    return (
      <div>
        <h1>传送成功：{this.context.num}</h1>
      </div>
    );
  }
}
