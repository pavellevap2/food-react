import { connect } from 'react-redux'
import SignUp from '../components/Authorization/SignUp'
import {
  takeUserEmail,
  takeUserPassword,
  clearFormData,
  submitSignupUser,
} from '../actions/auth'
import {
  getUserEmail,
  getUserPassword,
  getUserName,
  getAuthError,
} from '../selectors/auth'

const mapStateToProps = state => ({
  email: getUserEmail(state),
  password: getUserPassword(state),
  error: getAuthError(state),
})

const mapDispatchToProps = dispatch => ({
  takeUserEmail: email => dispatch(takeUserEmail(email)),
  takeUserPassword: password => dispatch(takeUserPassword(password)),
  clearForm: () => dispatch(clearFormData()),
  signUp: () => dispatch(submitSignupUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
