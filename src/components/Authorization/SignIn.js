import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Grid from 'material-ui/Grid'
import { TextField } from 'material-ui'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui'
import { styles, AuthForm, SignUpBlock } from './commons'
import Typography from 'material-ui/Typography'

class SignInPage extends Component {
  loginWithEmail = event => {
    event.preventDefault()
    this.props.singIn()
  }

  render() {
    const {
      email,
      password,
      classes,
      takeUserEmail,
      takeUserPassword,
      clearForm,
      error,
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
            SIGN IN
          </Typography>
          <br />
          <AuthForm onSubmit={this.loginWithEmail}>
            <TextField
              value={email}
              onChange={e => takeUserEmail(e.target.value)}
              error={error.length ? true : false}
              type="email"
              label={error === 'Invalid email' ? error : 'Email Address'}
              margin="normal"
            />

            <TextField
              value={password}
              onChange={e => takeUserPassword(e.target.value)}
              error={error.length ? true : false}
              type="password"
              label={error === 'Invalid password' ? error : 'Paswword'}
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
            <Link onClick={clearForm} className={classes.link} to="/signup">
              Don't have an account?
            </Link>
          </SignUpBlock>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(SignInPage)
