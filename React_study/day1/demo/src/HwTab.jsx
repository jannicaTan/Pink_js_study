import React, { Component } from 'react';
import './css/HW_TabCss.css'
class HwTab extends Component {
  state={
    arr:['haha','wuwu','enen'],
    arrNum:0
  }
  render() {
    return (
    <div className='banner'> 
      <ul>
        {
          // 重点在于className的三元判断
          this.state.arr.map((item,index)=>
          <li key={index} onClick={this.handleClick.bind(this,index)} className={this.state.activeNum===index ? 'active' : ''}>{item}</li>)
        }
      </ul>
      <ol>
      {
          this.state.arr.map((item,index)=>
          <li key={index} className={this.state.activeNum===index ? 'active' : ''}>{item}</li>)
        }
      </ol>
    </div>);
  }
  handleClick(index){
    console.log(index)
    this.setState({
      activeNum:index
    })
  }
}

export default HwTab;