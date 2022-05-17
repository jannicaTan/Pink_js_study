import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    return (
      <div>
        <h1>Detail</h1>
        <button onClick={this.goback.bind(this)}>Go back to Home</button>
      </div>
    )
  }
  goback(){
    // go(-1)可以回到上一页，goBack()也可以返回
    // this.props.history.go(-1);
    this.props.history.goBack();
}
}
