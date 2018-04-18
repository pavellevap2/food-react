import styled from 'styled-components'
import back from './geometry.png'

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const SignUpBlock = styled.div`
  margin-top: 2em;
`

export const styles = theme => ({
  container: {
    height: '100%',
    backgroundImage: `url(${back})`,
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
