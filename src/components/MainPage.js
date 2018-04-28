import React from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import PlacesContainer from '../containers/PlacesContainer'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import RestaurauntFormContainer from '../containers/RestaurauntFormContainer'
import ConfigVotePopup from './ConfigVotePopup'

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        {this.props.showVoteConfig ? <ConfigVotePopup /> : null}
        {this.props.userToken ? (
          <div>
            <Route
              path="/new_restaurant"
              component={RestaurauntFormContainer}
            />
            <Route exact path="/" component={PlacesContainer} />
          </div>
        ) : (
          <Redirect to="signup" />
        )}
      </div>
    )
  }
}

export default MainPage
