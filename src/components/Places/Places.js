import React from 'react'
import PlacesCard from './PlacesCard'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'

const styles = theme => ({
  fab: {
    position: 'fixed',
    zIndex: '2',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    [theme.breakpoints.up('md')]: {
      right: theme.spacing.unit * 4,
      height: '3em',
      width: '3em',
    },
  },
  plus: {
    [theme.breakpoints.up('md')]: {
      height: '1.3em',
      width: '1.3em',
    },
  },
})

class Places extends React.Component {
  componentDidMount() {
    this.props.syncWithDatabase()
  }

  render() {
    const { database } = this.props

    return (
      <Grid container justify={'center'} alignItems="center">
        {database.map((data, i) => <PlacesCard key={i} data={data} />)}
        <Link to="/new_restaurant">
          <Button
            variant="fab"
            className={this.props.classes.fab}
            color={'primary'}
          >
            <AddIcon className={this.props.classes.plus} />
          </Button>
        </Link>
      </Grid>
    )
  }
}

export default withStyles(styles)(Places)
