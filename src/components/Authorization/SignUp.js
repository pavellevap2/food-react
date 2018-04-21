import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
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
  }

  render() {
    const { error } = this.state
    const {
      username,
      classes,
      takeUserName,
      email,
      password,
      takeUserEmail,
      takeUserPassword,
      clearForm,
    } = this.props

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
              onChange={e => takeUserEmail(e.target.value)}
              error={error !== null ? true : false}
              type="text"
              label={error !== null ? error.message : 'Email Address'}
              margin="normal"
            />

            <TextField
              value={password}
              onChange={e => takeUserPassword(e.target.value)}
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
            <Link onClick={clearForm} className={classes.link} to="/">
              Do you already have an account?
            </Link>
          </SignUpBlock>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(withRouter(SignUpPage))
