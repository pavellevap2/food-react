import React from 'react'
import PlacesCard from './PlacesCard'
import Grid from 'material-ui/Grid'
import styled from 'styled-components'
import Button from 'material-ui/Button'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from 'material-ui/styles'
import green from 'material-ui/colors/green'
const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'fixed',
    zIndex: '2',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
  },
})

class Places extends React.Component {
  render() {
    return (
      <Grid container justify={'center'} alignItems="center">
        <PlacesCard />
        <PlacesCard />
        <Button
          variant="fab"
          className={this.props.classes.fab}
          color={'primary'}
        >
          {<AddIcon />}
        </Button>
      </Grid>
    )
  }
}

export default withStyles(styles)(Places)
