import MainPage from '../components/MainPage'
import { connect } from 'react-redux'
import { getUserTokenId } from '../selectors/auth'

const mapStateToProps = state => ({
  userToken: getUserTokenId(state),
})

export default connect(mapStateToProps)(MainPage)
