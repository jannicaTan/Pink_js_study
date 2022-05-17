import React, { Component } from 'react' 

class Son extends Component {
  // 设置默认值
  static defaultProps = {
    num: 888
  }
  render() {
     return (
       <div>
         <h2>{this.props.num}</h2>
         <button onClick={this.handleClick.bind(this)}>修改</button>
       </div>
     );
   }
  //  传值
   handleClick(){
     if(this.props.num===123){
      this.props.changeNum(999)
     }
     else{
       this.props.changeNum(123)
     }
   }
 }
 
export default class StoF extends Component {
  state = {
    num: 123
  }
  render() {
    return (
      <div>
        <Son num={this.state.num} changeNum={this.changeNum.bind(this)}></Son>
      </div>
    )
  }
  changeNum(arg){
    console.log(arg)
    this.setState({
      num: arg
    })
  }
}