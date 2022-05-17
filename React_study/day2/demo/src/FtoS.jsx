import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FtoS extends Component {
  render() {
    return (
      <div><Son num={123}></Son></div>
    )
  }
}

class Son extends Component {
  // 限制数据类型
  static propTypes={
    num: PropTypes.number
  }
  // 默认值
  // static defaultProps={
  //   num:888
  // }
  render() {
    return (
      <div>
        <h2>{this.props.num}</h2>
      </div>
    );
  }
}