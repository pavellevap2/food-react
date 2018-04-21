import { connect } from 'react-redux'
import SignIn from '../components/Authorization/SignIn'
import {
  takeUserData,
  takeUserEmail,
  takeUserPassword,
  clearFormData,
  submitLoginUser,
} from '../actions/auth'
import { getUserEmail, getUserPassword, getUserData } from '../selectors/auth'

const mapStateToProps = state => ({
  email: getUserEmail(state),
  password: getUserPassword(state),
  userData: getUserData(state),
})

const mapDispatchToProps = dispatch => ({
  takeUserData: userData => dispatch(takeUserData(userData)),
  takeUserEmail: email => dispatch(takeUserEmail(email)),
  takeUserPassword: password => dispatch(takeUserPassword(password)),
  clearForm: () => dispatch(clearFormData()),
  singIn: () => dispatch(submitLoginUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
