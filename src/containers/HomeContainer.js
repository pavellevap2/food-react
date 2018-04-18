import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
import { getUserData, getUserName } from '../selectors/auth'

const mapStateToProps = state => ({
  userData: getUserData(state),
  userName: getUserName(state),
})

export default connect(mapStateToProps)(HomePage)
