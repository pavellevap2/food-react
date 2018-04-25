import React from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import PlacesContainer from '../containers/PlacesContainer'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import RestaurauntForm from './RestaurantForm'

const MainPage = ({ userToken }) => (
  <div>
    <HeaderContainer />
    {userToken ? (
      <div>
        <Route path="/new_restaurant" component={RestaurauntForm} />
        <Route exact path="/" component={PlacesContainer} />
      </div>
    ) : (
      <Redirect to="signup" />
    )}
  </div>
)

export default MainPage
