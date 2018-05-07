import React from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import PlacesContainer from '../containers/PlacesContainer'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import RestaurauntFormContainer from '../containers/RestaurauntFormContainer'
import VoteConfigContainer from '../containers/VoteConfigContainer'

class MainPage extends React.Component {
  componentDidMount() {
    this.props.getVoteTimeRange()
  }

  render() {
    const { showVoteConfig, userToken, timeRange } = this.props

    return (
      <div>
        <HeaderContainer />
        {showVoteConfig ? <VoteConfigContainer /> : null}
        {userToken ? (
          <div>
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
