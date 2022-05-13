import { Component } from 'react'
let msg="测试循环"
let arr=['1','2','3']
export default class App4 extends Component {
  render() {
    return (
      <div>
        <p>{msg}</p>
        <ul>{
          arr.map((item,index)=>{
            return(
              <li key={index}>{item}</li>
            )
          })
          // Map的简写形式
          // arr.map((item,index)=><li key={index}>{item}</li>)
          }</ul>
      </div>
    )
  }
}
