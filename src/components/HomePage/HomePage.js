import React from 'react'
import VotesTableContainer from '../../containers/VotesTableContainer'
import PlacesContainer from '../../containers/PlacesContainer'
import styled from 'styled-components'
import preloader from './preloader.jpeg'

const PreloaderBlock = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PreloaderImg = styled.img.attrs({ src: preloader, alt: 'preloader' })`
  animation: preloader-logo-spin infinite 5s linear;
  height: 10em;
  width: 10em;
  @keyframes preloader-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

class HomePage extends React.Component {
  componentDidMount() {
    this.props.syncWithDatabase()
  }
  render() {
    const { preloader } = this.props

    return (
      <div>
        {preloader ? (
          <PreloaderBlock>
            <PreloaderImg />
          </PreloaderBlock>
        ) : (
          <div>
            <VotesTableContainer />
            <PlacesContainer />
          </div>
        )}
      </div>
    )
  }
}

export default HomePage
