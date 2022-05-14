import React, { Component } from 'react'

export default class AppArr extends Component {
  state = {
    arr: ['1', '2', '3']
  }
  render() {
    return (
      <div>AppArr
        <ul>
          {
            this.state.arr.map((item, index) => (<li key={index}>{item}</li>))
          }
        </ul>
        <button onClick={() => this.onChange()}>changeArr</button>
      </div>
    )
  }
  onChange() {
    console.log('1:',this.state.arr)
    // 方法1:因为arr是引用类型，所以将newArr赋值其实地址还是指向同一个，修改值的话原始的arr也会改变
    // let newArr=this.state.arr;
    // newArr.splice(2,1,'haha')
    // this.setState({
    //   arr:newArr
    // })
    // console.log(this.state.arr)
    // 改进——深拷贝：
    // ❓问题：多次点击onchange()，原数组还是进行了改变
    let newArr = JSON.parse(JSON.stringify(this.state.arr));
    newArr.splice(2, 1, 'haha')
    this.setState({
      arr: newArr
    })
    console.log('after',this.state.arr)
  }
}
