import React, { Component } from 'react'
import { Button, Input, Space, List } from 'antd';
import store from './store';
export default class TodoList extends Component {
  constructor(props){
    super(props)
    // 获取仓库状态store.getState()
    this.state=store.getState()
    store.subscribe(this.storeChange.bind(this)) //订阅Redux的状态
  }
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <h1>TodoList</h1>
          <Space>
            <Input placeholder="Basic usage" value={this.state.inputVal} onChange={this.handleChange.bind(this)}  />
            <Button type="primary" onClick={this.addTask.bind(this)}>Primary Button</Button>
          </Space>
          <List
            size="small"
            bordered
            dataSource={this.state.data}
            renderItem={(item,index) => <List.Item key={item} onDoubleClick={()=>this.delListItem(index)}>{item}</List.Item>}
          />
          {/* 双击删除 */}
        </Space>
      </div>

    )
  }
  storeChange(){
    this.setState(store.getState())
  }
  handleChange(e){
    const action ={
      type:'change-input-val',
      value:e.target.value
    }
    store.dispatch(action);
  }
  addTask(e) {
    const action={
      type:'add-list',
      value:e.target.value
    }
    store.dispatch(action)
  }
  // 注意这里传递的是index
  delListItem(index){
    const action ={
      type:'del_item',
      value:index
    }
    store.dispatch(action)
  }
}
