import React from "react";
import ReactDOM from 'react-dom/client';
import StateHook from "./useStateHook";
import EffectHook from "./useEffectHook";

// 为提供的创建一个 React 根container并返回根。
const root = ReactDOM.createRoot(document.getElementById("root"));
// 根可用于将 React 元素渲染到 DOM 中
root.render(
  <>
  <StateHook></StateHook>
  <EffectHook></EffectHook>
  </>
)
// 验证effect重新渲染，模拟use
setTimeout(()=>{
  root.render(
    <>
    <h1>haha</h1>
    </>
  )
},3000)
