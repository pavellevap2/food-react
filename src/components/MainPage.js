import React from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import VoteConfigContainer from '../containers/VoteConfigContainer'
import NewRestarauntFormPageContainer from '../containers/NewRestarauntFormPageContainer'
import HomePageContainer from '../containers/HomePageContainer'

class MainPage extends React.Component {
  render() {
    const { showVoteConfig, userToken } = this.props

    return (
      <div>
        <HeaderContainer />
        {userToken ? (
          <div>
            {showVoteConfig ? <VoteConfigContainer /> : null}
            <div>
              <Route
                path="/new_restaurant"
                component={NewRestarauntFormPageContainer}
              />
              <Route exact path="/" component={HomePageContainer} />
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
