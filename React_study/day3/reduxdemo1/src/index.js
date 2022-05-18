import React from "react";
import ReactDOM from 'react-dom/client';
import './App.css'
import TodoList from "./TodoList";

// 为提供的创建一个 React 根container并返回根。
const root = ReactDOM.createRoot(document.getElementById("root"));
// 根可用于将 React 元素渲染到 DOM 中
root.render(
  <>
  <TodoList />
  </>
);