import React,{ useState }  from 'react'

export default function StateHook() {
  // [变量名，修改变量的方法]
  const [num,setNum]=useState(20)
  return (
    <div>
      <h3>{num}</h3>
      <button onClick={()=>{setNum(num+1)}}>+1</button>
    </div>
  )
}

