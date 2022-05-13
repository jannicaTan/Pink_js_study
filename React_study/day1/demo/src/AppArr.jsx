import React, { Component } from 'react'

export default class AppArr extends Component {
  state = {
    arr:['1', '2', '3']
  }
  render() {
    return (
      <div>AppArr
        <ul>
          {
            this.state.arr.map((item, index) => {
              return (<li key={index}>{item}</li>)
            })
          }
        </ul>
        <button onClick={()=>this.onClick}>changeArr</button>
      </div>
    )
  }
  onClick(){
    console.log(1)
  }
}
