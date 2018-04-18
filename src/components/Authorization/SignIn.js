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

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
`

const GoogleBtn = styled.img`
  height: 2em;
  width: 2em;
`
const SignUpBlock = styled.div`
  margin-top: '22em';
  display: flex;
  justify-content: space-around;
`

const styles = theme => ({
  container: {
    height: '100%',
  },
  form: { width: '100%' },
  title: {
    textAlign: 'center',
    fontSize: '3em',
  },
  link: { color: '#303F9F', textDecoration: 'none', marginTop: '2em' },
  button: { marginTop: '2em', fontSize: '1.5em' },
  googleBtn: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2em',
    fontSize: '1.2em',
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

  onSubmitData = event => {
    const { email, password } = this.state
    const { history } = this.props

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(data => {
        this.setState({
          user: data,
        })
        history.push('./home')
      })
      .catch(error => {
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
    console.log(error)
    return (
      <Grid
        container
        display={'flex'}
        justify="center"
        alignItems="center"
        margin="normal"
        className={classes.container}
      >
        <Grid item md={4} sm={7} xs={8} lg={3}>
          <FormHelperText className={classes.title}>Sign In</FormHelperText>
          <br />
          <InputForm onSubmit={this.onSubmitData}>
            <TextField
              value={email}
              onChange={event => this.setState({ email: event.target.value })}
              type="text"
              label={error !== null ? error.message : 'Email Address'}
              margin="normal"
            />

            <TextField
              value={password}
              onChange={event =>
                this.setState({ password: event.target.value })
              }
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
              <GoogleBtn src={google} /> login with Google
            </Button>

            <Button
              className={classes.button}
              variant="raised"
              color="primary"
              margin="normal"
              type="submit"
            >
              Get Started
            </Button>
          </InputForm>
          <SignUpBlock>
            <Link className={classes.link} to="/signup">
              Dont have an account?
            </Link>
          </SignUpBlock>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(withRouter(SignInPage))
