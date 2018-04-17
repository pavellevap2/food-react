import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { auth } from '../../firebase/index'
import Grid from 'material-ui/Grid'
import { FormHelperText } from 'material-ui/Form'
import { TextField } from 'material-ui'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui'
import styled from 'styled-components'

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
`

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

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

class SignInPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      error: null,
    }
  }

  onSubmit = event => {
    const { email, password } = this.state

    const { history } = this.props

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }))
        history.push('./home')
      })
      .catch(error => {
        this.setState({ error: error })
      })

    event.preventDefault()
  }

  render() {
    const { email, password, error } = this.state
    const { classes } = this.props
    const isPasswordValid = password.length
    const isFormValid = email.length

    return (
      <Grid
        container
        direction={'column'}
        justify={'center'}
        alignItems={'center'}
        className={classes.container}
      >
        <FormHelperText className={classes.title}>Sign In</FormHelperText>
        <br />
        <FormHelperText color="primary">
          <Link className={classes.link} to="/">
            Dont have an account?
          </Link>
        </FormHelperText>
        <InputForm onSubmit={this.onSubmit} className={classes.form}>
          <TextField
            error={email.length ? false : true}
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
            type="text"
            label="Email Address"
            margin="normal"
          />
          <TextField
            value={password}
            onChange={event => this.setState({ password: event.target.value })}
            type="password"
            label="Password"
            error={isPasswordValid ? false : true}
            margin="normal"
          />
          <Button
            disabled={isFormValid ? false : true}
            variant="raised"
            color="primary"
            margin="normal"
            type="submit"
          >
            Sign Ip
          </Button>
        </InputForm>
      </Grid>
    )
  }
}

export default withStyles(styles)(withRouter(SignInPage))
