import { connect } from 'react-redux'
import SignUp from '../components/Authorization/SignUp'
import {
  takeUserEmail,
  takeUserPassword,
  takeUserName,
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
  username: getUserName(state),
  email: getUserEmail(state),
  password: getUserPassword(state),
  error: getAuthError(state),
})

const mapDispatchToProps = dispatch => ({
  takeUserName: userName => dispatch(takeUserName(userName)),
  takeUserEmail: email => dispatch(takeUserEmail(email)),
  takeUserPassword: password => dispatch(takeUserPassword(password)),
  clearForm: () => dispatch(clearFormData()),
  signUp: () => dispatch(submitSignupUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
