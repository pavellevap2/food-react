import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { auth } from '../../firebase/index'
import Grid from 'material-ui/Grid'
import { TextField } from 'material-ui'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui'
import { styles, AuthForm, SignUpBlock } from './commons'
import Typography from 'material-ui/Typography'

class SignUpPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: null,
      user: null,
    }
  }

  submitData = event => {
    const { email, password } = this.state

    auth
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.props.takeUserData(authUser)
        this.props.history.push('/home')
      })
      .catch(error => {
        this.setState({ error: error })
      })
    event.preventDefault()
  }

  render() {
    const { email, password, error } = this.state
    const { username, classes, takeUserName } = this.props

    return (
      <Grid
        container
        display="flex"
        justify="center"
        alignItems="center"
        margin="normal"
        className={classes.container}
      >
        <Grid item md={4} sm={7} xs={10} lg={3}>
          <Typography
            align="center"
            className={classes.formTitle}
            variant="display3"
          >
            SIGN UP
          </Typography>
          <AuthForm onSubmit={this.submitData}>
            <TextField
              value={username}
              onChange={e => takeUserName(e.target.value)}
              type="text"
              margin="normal"
              label="Full Name"
            />
            <TextField
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
              error={error !== null ? true : false}
              type="text"
              label={error !== null ? error.message : 'Email Address'}
              margin="normal"
            />

            <TextField
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
              label="Password"
              margin="normal"
            />
            <Button
              className={classes.submitButton}
              variant="raised"
              color="primary"
              type="submit"
            >
              Get Started
            </Button>
          </AuthForm>
          <SignUpBlock>
            <Link className={classes.link} to="/">
              Do you already have an account?
            </Link>
          </SignUpBlock>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(withRouter(SignUpPage))
