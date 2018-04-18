import ReactDOM from 'react-dom'
import Root from './components/Root'
import React from 'react'
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
`

ReactDOM.render(<Root />, document.getElementById('root'))
