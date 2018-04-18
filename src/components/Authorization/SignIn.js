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
      email: '',
      password: '',
      error: null,
    }
  }

  submitData = event => {
    const { email, password } = this.state
    const { history, takeUserData } = this.props

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        takeUserData(authUser)

        history.push('/home')
      })
      .catch(error => {
        this.setState({ error: error })
      })
    event.preventDefault()
  }

  login = () => {
    authorization.signInWithPopup(provider).then(result => {
      this.props.takeUserData(result.user)
      this.props.history.push('/home')
    })
  }

  render() {
    const { email, password, error } = this.state
    const { classes } = this.props

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
          <AuthForm onSubmit={this.submitData}>
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
              variant="raised"
              color="default"
              className={classes.googleBtn}
              onClick={this.login}
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
            <Link className={classes.link} to="/signup">
              Don't have an account?
            </Link>
          </SignUpBlock>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(withRouter(SignInPage))
