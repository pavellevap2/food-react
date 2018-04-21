import React from 'react'
import Header from './Header'
import PlacesContainer from '../containers/PlacesContainer'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PlacesContainer />
      </div>
    )
  }
}

export default HomePage
