import React from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import PlacesContainer from '../containers/PlacesContainer'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'

const MainPage = ({ userToken }) => (
  <div>
    <HeaderContainer />
    {userToken ? (
      <div>
        <Route path="/" component={PlacesContainer} />
        <Route path="/card" />
      </div>
    ) : (
      <Redirect to="signup" />
    )}
  </div>
)

export default MainPage
