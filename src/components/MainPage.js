import React from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import PlacesContainer from '../containers/PlacesContainer'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import RestaurauntFormContainer from '../containers/RestaurauntFormContainer'
import VoteConfigContainer from '../containers/VoteConfigContainer'
import moment from 'moment'

class MainPage extends React.Component {
  componentDidMount() {
    this.props.checkVoteState()
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        {this.props.showVoteConfig ? <VoteConfigContainer /> : null}
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
