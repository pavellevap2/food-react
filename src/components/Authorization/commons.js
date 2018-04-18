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
    color: theme.palette.primary.dark,
    textShadow: '2px 2px 0px #fff, 5px 5px 0px rgba(0,0,0,0.15)',
  },
  submitButton: {
    fontSize: '1.4em',
    marginTop: '2em',
  },
  googleBtn: {
    marginTop: '2em',
    fontSize: '1.1em',
  },
})
