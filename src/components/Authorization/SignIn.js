import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { auth } from '../../firebase/index'
import Grid from 'material-ui/Grid'
import { FormHelperText } from 'material-ui/Form'
import { TextField } from 'material-ui'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui'
import styled from 'styled-components'
import { authorization, provider } from '../../firebase/firebase'
import google from './google.png'

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
`

const GoogleBtnImg = styled.img`
  height: 2em;
  width: 2em;
  margin-right: 1em;
`

const GoogleBtnImgTest = styled.span`
  margin-left: 0.7em;
`

const SignUpBlock = styled.div`
  margin-top: 2em;
`

const styles = theme => ({
  container: {
    height: '100%',
  },
  form: {
    width: '100%',
  },
  link: {
    color: theme.palette.primary.dark,
  },
  formTitle: {
    textAlign: 'center',
    fontSize: '3em',
    color: theme.palette.primary.dark,
  },
  submitButton: {
    fontSize: '1.4em',
  },
  googleBtn: {
    margin: '2em 0',
    fontSize: '1.1em',
  },
})

class SignInPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      email: '',
      password: '',
      error: null,
    }
  }

  submitData = event => {
    const { email, password } = this.state
    const { history } = this.props

    auth.doSignInWithEmailAndPassword(email, password).then(data => {
      this.setState({
        user: data,
      })
    })
    history.push('/home').catch(error => {
      this.setState({ error: error })
    })
    event.preventDefault()
  }

  login = () => {
    authorization.signInWithPopup(provider).then(result => {
      this.setState({
        user: result.user,
      })
      this.props.history.push('/home')
    })
  }

  render() {
    const { email, password, error } = this.state
    const { classes } = this.props
    console.log(this.state.user)

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
          <FormHelperText className={classes.formTitle}>Sign In</FormHelperText>
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
              <GoogleBtnImgTest>login with Google</GoogleBtnImgTest>
            </Button>

            <Button
              className={classes.submitButton}
              variant="raised"
              color="primary"
              margin="normal"
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
