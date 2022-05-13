import React, { Component } from 'react'
let msg = 'hello world'
export default class Appfunction extends Component {
  render() {
    return (
      <> 
      <div>Appfunction</div>
      <p>{msg}</p>
      <button onClick={this.onChange.bind(this)}>onChange</button>
      </>
    )
  }
  onChange(){
    msg='haha'
    console.log(msg)
  }
}
