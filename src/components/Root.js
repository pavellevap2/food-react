import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUpPage from '../components/Authorization/SignUp'
import HomePage from './HomePage'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import SignInPage from '../components/Authorization/SignIn'

const theme = createMuiTheme({
  palette: {
    theme: 'light',
  },
})

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
)

export default Root
