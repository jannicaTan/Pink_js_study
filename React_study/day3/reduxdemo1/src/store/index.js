// import { createStore } from 'redux'
import {configureStore} from '@reduxjs/toolkit'
// 引入reducer
import reducer from './reducer'

// configureStore替代creaateStore
// import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './reducers'

// // 这个store已经集成了redux-thunk和Redux DevTools
// const store = configureStore({ reducer: rootReducer })

const store = configureStore({ reducer: reducer });
export default store;