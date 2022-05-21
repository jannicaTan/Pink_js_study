import React, { Component } from 'react';
import store from './store'
import {clickFnAction} from './store/actionCreator'

class App extends Component {
  constructor(props){
    super(props)
    this.state=store.getState()
    store.subscribe(this.upDatestore.bind(this))
  }
  render() {
    return (
      <div>
        {console.log('sec',this.state.num)}
        <p>{this.state.num}</p>
        <button onClick={this.clickChange.bind(this)}>Add</button>
      </div>    
    );
  }
  clickChange(){
    const action=clickFnAction()//这里的actionCreator本质上是一个方法，所以不要忘记（）
    store.dispatch(action)
  }
  upDatestore(){
    this.setState(store.getState())
  }
}

export default App;
