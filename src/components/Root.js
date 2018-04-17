import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUpPage from '../components/Authorization/SignUp'
import HomePage from './HomePage'

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignUpPage} />
      <Route path="/home" component={HomePage} />
    </Switch>
  </BrowserRouter>
)

export default Root
