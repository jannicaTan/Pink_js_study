import React, { useState, useEffect } from 'react'

export default function EffectHook() {
  // [变量名，修改变量的方法]
  const [num, setNum] = useState(1)
  const [num1, setNum1] = useState(2)
  useEffect(() => {
    document.title = `You clicked ${num1} times`;
  }, [num1])//这里就只会检测num1的变化进行console.log
  // 这个hook检测离开组件
  useEffect(() => {
    return () => {
      console.log('离开了App1组件')
    }
  },[])		// [] 代表这个useEffect不检测任何一个字段更新

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => { setNum(num + 1) }}>+1</button>
      <h1>{num1}</h1>
      <button onClick={() => { setNum1(num1 + 2) }}>+2</button>
    </div>
  )
}
