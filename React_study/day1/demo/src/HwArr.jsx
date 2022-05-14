import React, { Component } from 'react'
import './css/Hw_ArrCss.css'
export default class HwArr extends Component {
  state = {
    arr: [
      { id: 1, txt: '6月25日峡谷龙舟赛挑战局数异常修复公告哈哈哈哈哈哈哈', time: '06/25' },
      { id: 2, txt: '6月25日峡谷龙舟赛挑战局数异常说明', time: '06/25' },
      { id: 3, txt: '6月25日体验服停机更新公告', time: '06/25' },
      { id: 4, txt: '6月24日峡谷龙舟赛异常修复公告', time: '06/24' },
      { id: 5, txt: '6月24日“演员”惩罚名单', time: '06/24' },
      { id: 6, txt: '6月24日外挂专项打击公告', time: '06/24' }
    ]
  }
  render() {
    return (
      <div className='banner'>
        <ul>
          {
            this.state.arr.map((item, index) => {
              return (
                <div class='column'>               
                    <span class='titleIcon'>公告</span>
                    <span className='text'>{item.txt}</span>
                  <span>{item.time}</span>
                  {/* <button>删除</button> */}
                </div>
               
              )
            })
          }
        </ul>
      </div>
    )
  }
}
