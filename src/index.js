import ReactDOM from 'react-dom'
import Root from './components/Root'
import React from 'react'
import { Provider } from 'react-redux'
import store from './configureStore'
import { injectGlobal } from 'styled-components'

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
`

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'),
)
