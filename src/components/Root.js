import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignUpContainer from '../containers/SignUpContainer'
import MainPageContainer from '../containers/MainPageContainer'
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
      <Route path="/signup" component={SignUpContainer} />
      <Route path="/signin" component={SignInContainer} />
      <Route path="/" component={MainPageContainer} />
    </Switch>
  </MuiThemeProvider>
)

export default Root
