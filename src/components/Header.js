import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Close from '@material-ui/icons/Close'
import { withRouter } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
    }
  }

  render() {
    const { classes, signOut } = this.props
    const { isMenuOpen } = this.state

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={() => this.setState({ isMenuOpen: !isMenuOpen })}
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              {!isMenuOpen ? <MenuIcon /> : <Close />}
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              BBB
            </Typography>
            <Button onClick={signOut} color="inherit">
              Sign Out
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(Header))
