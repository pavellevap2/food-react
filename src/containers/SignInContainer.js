import { connect } from 'react-redux'
import SignIn from '../components/Authorization/SignIn'
import { takeUserData } from '../actions/auth'

const mapDispatchToProps = dispatch => ({
  takeUserData: userData => dispatch(takeUserData(userData)),
})

export default connect(undefined, mapDispatchToProps)(SignIn)
