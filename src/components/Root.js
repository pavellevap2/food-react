import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUpPage from '../components/Authorization/SignUp'
import HomePage from './HomePage'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
})

const Root = () => (
  <MuiThemeProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignUpPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
)

export default Root
