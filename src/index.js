import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App.js'
import store from './store.js'

// createStroe需要传入一个reducer
// reducers指定了应用状态的变化如何响应actions并发送到store
// actions只是描述了有事情发生，并没有描述应用应该如何更新state
console.log(store)
window.store = store 
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)