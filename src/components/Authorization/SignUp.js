import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { auth } from '../../firebase/index'
import Grid from 'material-ui/Grid'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { TextField } from 'material-ui'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui'
import styled from 'styled-components'

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
`

const styles = theme => ({
  container: {
    height: '100%',
  },
  form: {
    width: '30%',
  },
  title: {
    fontSize: '3em',
  },
  link: { color: '#303F9F', textDecoration: 'none' },
})

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

class SignUpPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null,
    }
  }

  onSubmit = event => {
    const { email, passwordOne } = this.state
    const { history } = this.props

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }))
        history.push('./home')
      })
      .catch(error => {
        this.setState({ error: error })
      })

    event.preventDefault()
  }

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state
    const { classes } = this.props
    const isPasswordValid = passwordOne.length && passwordTwo.length
    const isFormValid =
      passwordOne === passwordTwo && email.length && username.length

    return (
      <Grid
        container
        direction={'column'}
        justify={'center'}
        alignItems={'center'}
        className={classes.container}
      >
        <FormHelperText className={classes.title}>Sign Up</FormHelperText>
        <br />
        <FormHelperText color="primary">
          <Link className={classes.link} to="/login">
            Do you already have an account?
          </Link>
        </FormHelperText>
        <InputForm onSubmit={this.onSubmit} className={classes.form}>
          <TextField
            value={username}
            onChange={event => this.setState({ username: event.target.value })}
            type="text"
            margin="normal"
            label="Full Name"
          />
          <TextField
            error={email.length ? false : true}
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
            type="text"
            label="Email Address"
            margin="normal"
          />
          <TextField
            value={passwordOne}
            onChange={event =>
              this.setState({ passwordOne: event.target.value })
            }
            type="password"
            label="Password"
            error={isPasswordValid ? false : true}
            margin="normal"
          />
          <TextField
            value={passwordTwo}
            onChange={event =>
              this.setState({ passwordTwo: event.target.value })
            }
            type="password"
            error={isPasswordValid ? false : true}
            label="Confirm Password"
            margin="normal"
          />
          <Button variant="raised" color="primary" type="submit">
            Sign Up
          </Button>
          {error && <p>{error.message}</p>}
        </InputForm>
      </Grid>
    )
  }
}

const SignUpLink = () => (
  <p>
    Already have an account? <Link to="./signup">Sign Up</Link>
  </p>
)

export default withStyles(styles)(withRouter(SignUpPage))
