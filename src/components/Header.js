import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
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

const Header = ({ classes, signOut }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          BBB
        </Typography>
        <Button onClick={signOut} color="inherit">
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  </div>
)

export default withStyles(styles)(withRouter(Header))
