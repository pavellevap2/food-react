import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUpContainer from '../containers/SignUpContainer'
import HomePageContainer from '../containers/HomeContainer'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import SignInContainer from '../containers/SignInContainer'

const theme = createMuiTheme({
  palette: {
    theme: 'light',
  },
})

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignInContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/home" component={HomePageContainer} />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
)

export default Root
