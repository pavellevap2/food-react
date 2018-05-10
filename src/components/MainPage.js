import React from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import PlacesContainer from '../containers/PlacesContainer'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import NewRestaurauntFormContainer from '../containers/NewRestaurauntFormContainer'
import VoteConfigContainer from '../containers/VoteConfigContainer'
import VotesTableContainer from '../containers/VotesTableContainer'

class MainPage extends React.Component {
  render() {
    const { showVoteConfig, userToken } = this.props

    return (
      <div>
        <HeaderContainer />
        {userToken ? (
          <div>
            {showVoteConfig ? <VoteConfigContainer /> : null}
            <VotesTableContainer />
            <div>
              <Route
                path="/new_restaurant"
                component={NewRestaurauntFormContainer}
              />
              <Route exact path="/" component={PlacesContainer} />
            </div>
          </div>
        ) : (
          <Redirect to="signup" />
        )}
      </div>
    )
  }
}

export default MainPage
