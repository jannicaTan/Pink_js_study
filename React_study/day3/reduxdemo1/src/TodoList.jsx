import React, { Component } from 'react'
import { Button, Input, Space, List } from 'antd';
export default class TodoList extends Component {
  state = {
    inputVal: '',
    data: [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.',
    ]
  }
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <h1>TodoList</h1>
          <Space>
            <Input placeholder="Basic usage" value={this.state.value} onChange={this.handleChange.bind(this)}  />
            <Button type="primary" onClick={this.addTask.bind(this)}>Primary Button</Button>
          </Space>
          <List
            size="small"
            bordered
            dataSource={this.state.data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </Space>
      </div>

    )
  }
  handleChange(e){
    this.setState({
      inputVal:e.target.value
    })
  }
  addTask() {
    console.log('first')
  }
}
