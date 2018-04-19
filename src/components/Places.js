import React from 'react'
import PlacesCard from './PlacesCard'
import Grid from 'material-ui/Grid'
import styled from 'styled-components'

class Places extends React.Component {
  render() {
    return (
      <Grid container justify={'center'} alignItems="center">
        <PlacesCard />
        <PlacesCard />
      </Grid>
    )
  }
}

export default Places
