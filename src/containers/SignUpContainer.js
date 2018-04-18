import { connect } from 'react-redux'
import SignUp from '../components/Authorization/SignUp'
import { takeUserData, takeUserName } from '../actions/auth'
import { getUserName } from '../selectors/auth'

const mapStateToProps = state => ({
  username: getUserName(state),
})

const mapDispatchToProps = dispatch => ({
  takeUserData: userData => dispatch(takeUserData(userData)),
  takeUserName: userName => dispatch(takeUserName(userName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
