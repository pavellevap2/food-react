import React from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import PlacesContainer from '../containers/PlacesContainer'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import RestaurauntFormContainer from '../containers/RestaurauntFormContainer'
import VoteConfigContainer from '../containers/VoteConfigContainer'

class MainPage extends React.Component {
  render() {
    const { showVoteConfig, userToken, voteStarting, voteEnding } = this.props
    return (
      <div>
        <HeaderContainer />
        {showVoteConfig ? <VoteConfigContainer /> : null}
        {userToken ? (
          <div>
            <div>
              {voteStarting ? (
                <h1>Голосование началось</h1>
              ) : voteEnding ? (
                <h1>Голосование завершилось</h1>
              ) : null}
            </div>
            <div>
              <Route
                path="/new_restaurant"
                component={RestaurauntFormContainer}
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
