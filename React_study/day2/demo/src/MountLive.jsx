import React, { Component } from 'react'

export default class MountLive extends Component {
  constructor(props){
    console.log("1 constructor: 构造初始化")
    super(props)
  }
  UNSAFE_componentWillMount(){
    console.log('02-willmount')
  }
  render() {
    console.log('03-render')
    return (
      <div>MountLive</div>
    )
  }
  componentDidMount(){
    console.log('04-didmount')
  }
}
