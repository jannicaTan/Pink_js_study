import React, { Component } from 'react'

export default class AppState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'hello world'
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.msg}</p>
        <button onClick={() => this.onChange()}>onChange----state</button>
      </div>
    )
  }
  onChange() {
    // 使用setStagea
    this.setState({
      msg: 'haha'
    })
  }
}
