import React from "react";
import ReactDOM from "react-dom";
/*
ReactDOM.render(参数1，参数2)
参数1 是JSX语法的标签/组件
参数2 是要把参数1这个标签渲染到的位置
*/
ReactDOM.render(
  <>
    <h1>
    
    hello world
  </h1>
  </>
,
  document.getElementById('root')
)