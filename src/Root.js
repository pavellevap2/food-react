import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Authorization from './Authorization'

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Authorization} />
    </Switch>
  </BrowserRouter>
)

export default Root
