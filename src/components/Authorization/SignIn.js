import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { auth } from '../../firebase/index'
import Grid from 'material-ui/Grid'
import { TextField } from 'material-ui'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui'
import styled from 'styled-components'
import { authorization, provider } from '../../firebase/firebase'
import google from './google.png'
import { styles, AuthForm, SignUpBlock } from './commons'
import Typography from 'material-ui/Typography'

const GoogleBtnImg = styled.img`
  height: 2em;
  width: 2em;
`

const GoogleBtnImgText = styled.span`
  margin-left: 5%;
`

class SignInPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
    }
  }

  loginWithEmail = event => {
    this.props.singIn()
    event.preventDefault()
  }

  loginWithGoogle = () => {
    authorization.signInWithPopup(provider).then(result => {
      this.props.takeUserData(result.user)
      this.props.history.push('/home')
    })
  }

  render() {
    const { error } = this.state
    const {
      email,
      password,
      classes,
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
            SIGN IN
          </Typography>
          <br />
          <AuthForm onSubmit={this.loginWithEmail}>
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
              variant="raised"
              color="default"
              className={classes.googleBtn}
              onClick={this.loginWithGoogle}
            >
              <GoogleBtnImg src={google} />
              <GoogleBtnImgText>login with Google</GoogleBtnImgText>
            </Button>

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

export default withStyles(styles)(withRouter(SignInPage))
