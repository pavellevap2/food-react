import React from 'react'
import PlacesCard from './PlacesCard'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'
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

  @keyframes preloader-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

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
    const { database, preloader, makeVote, voteData } = this.props

    return (
      <div>
        {preloader ? (
          <PreloaderBlock>
            <PreloaderImg />
          </PreloaderBlock>
        ) : (
          <Grid container justify={'center'} alignItems="center">
            {database.map((data, i) => (
              <PlacesCard
                key={i}
                index={i}
                votesData={voteData}
                makeVote={makeVote}
                data={data}
              />
            ))}
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
        )}
      </div>
    )
  }
}

export default withStyles(styles)(Places)
