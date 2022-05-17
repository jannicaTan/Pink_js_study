import React from 'react'
import { Route,BrowserRouter,Switch } from 'react-router-dom'
import Home from '../Home'
import Detail from '../Detail'
const BasicRoute=()=>{
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/detail' component={Detail}></Route>
    </Switch>
    </BrowserRouter>

  )
}
export default BasicRoute