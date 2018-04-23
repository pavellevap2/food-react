import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignUpContainer from '../containers/SignUpContainer'
import HomePage from '../components/HomePage'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import SignInContainer from '../containers/SignInContainer'

const theme = createMuiTheme({
  palette: {
    theme: 'light',
  },
})

const Root = ({ database }) => (
  <MuiThemeProvider theme={theme}>
    <Switch>
      <Route exact path="/" component={SignInContainer} />
      <Route path="/signup" component={SignUpContainer} />
      <Route path="/home" component={HomePage} />
    </Switch>
  </MuiThemeProvider>
)

export default Root
