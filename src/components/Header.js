import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withRouter, Link } from 'react-router-dom'
import styled from 'styled-components'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  voteBtn: {
    marginRight: '2em',
  },
}

const HeaderLogo = styled(Link)`
  color: white;
`

const Header = ({ classes, signOut }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          <HeaderLogo to="/">BBB</HeaderLogo>
        </Typography>
        <Button onClick={signOut} className={classes.voteBtn} color="inherit">
          Начать голосвание
        </Button>

        <Button onClick={signOut} color="inherit">
          Выйти
        </Button>
      </Toolbar>
    </AppBar>
  </div>
)

export default withStyles(styles)(withRouter(Header))
