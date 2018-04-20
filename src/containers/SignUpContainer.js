import { connect } from 'react-redux'
import SignUp from '../components/Authorization/SignUp'
import {
  takeUserData,
  takeUserEmail,
  takeUserPassword,
  takeUserName,
  clearFormData,
} from '../actions/auth'
import { getUserEmail, getUserPassword, getUserName } from '../selectors/auth'

const mapStateToProps = state => ({
  username: getUserName(state),
  email: getUserEmail(state),
  password: getUserPassword(state),
})

const mapDispatchToProps = dispatch => ({
  takeUserData: userData => dispatch(takeUserData(userData)),
  takeUserName: userName => dispatch(takeUserName(userName)),
  takeUserEmail: email => dispatch(takeUserEmail(email)),
  takeUserPassword: password => dispatch(takeUserPassword(password)),
  clearForm: () => dispatch(clearFormData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
