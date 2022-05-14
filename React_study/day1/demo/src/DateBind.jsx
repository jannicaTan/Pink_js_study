import React, { Component } from 'react';

class DateBind extends Component {
  state={
    msg:''
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.msg} onChange={this.inputFn.bind(this)}/>
        <h3>{this.state.msg}</h3>
      </div>
    );
  }
  inputFn(e){
    console.log(e.currentTarget.value)
    this.setState({
      msg:e.currentTarget.value
    })
  }
}

export default DateBind;