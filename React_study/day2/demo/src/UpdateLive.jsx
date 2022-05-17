import React, { Component } from 'react'
export default class updateLive extends Component {
  state = {
    num: 123
  }
  render() {
    console.log('03-render-update')
    return (
      <div>
        <div>
                <p onClick={this.handleClick.bind(this)}>这是一个展示生命周期的组件</p>
                <p onClick={this.handleClick.bind(this)}>这是一个展示生命周期的组件</p>
                <p onClick={this.handleClick.bind(this)}>这是一个展示生命周期的组件{this.state.num}</p>
            </div>
      </div>
    )
  }
	handleClick(){
    this.setState({
      num: 22
    })
    console.log(this.state.num)
}
  shouldComponentUpdate(nextProps, nextState){
        console.log("2.2 shouldComponentUpdate 可以判断修改前后的值是不是一样，不一样才去执行render。减少不必要的render，优化更新性能")
        console.log("旧的值：", this.state.num)
        console.log("新的值：", nextState.num)

        // return true   则执行render
        // return false   则不执行render
        //这里返回值是布尔值，但不应该写死，
        //而是判断新旧两个值是不是不相等，不相等就要执行render(就要返回true)
        return this.state.num !== nextState.num

  }
  UNSAFE_componentWillUpdate(nextProps, nextState){
    console.log("02-willUpdate")
  }
  componentDidUpdate(nextProps, nextState){
    console.log("04-updated")
  }
}
