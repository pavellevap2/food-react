import ReactDOM from 'react-dom'
import Root from './components/Root'
import React from 'react'
import { Provider } from 'react-redux'
import store from './configureStore'
import { injectGlobal } from 'styled-components'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

injectGlobal`
  
  html{
    height:100%;
  }
  body{
    height:100%;
    margin:0;
    padding:0;
  }
  #root{
    height:100%;
  }
  a{
    text-decoration: none
  }
  li{
    list-style:none
  }
  ul{
    padding:0,
    margin:0;
  }
  `

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Root />
    </Provider>
  </Router>,
  document.getElementById('root'),
)
