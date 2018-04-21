import React from 'react'
import PlacesCard from './PlacesCard'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from 'material-ui/styles'
import { app } from '../firebase/firebase'

const styles = theme => ({
  fab: {
    position: 'fixed',
    zIndex: '2',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
})

class Places extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      restaraunts: [],
    }
  }

  componentDidMount() {
    this.props.syncWithDatabase()
  }

  render() {
    const { database } = this.props

    return (
      <Grid container justify={'center'} alignItems="center">
        {database.map((data, i) => <PlacesCard key={i} data={data} />)}

        <Button
          variant="fab"
          className={this.props.classes.fab}
          color={'primary'}
        >
          <AddIcon />
        </Button>
      </Grid>
    )
  }
}

export default withStyles(styles)(Places)
