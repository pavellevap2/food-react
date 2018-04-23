import MainPage from '../components/MainPage'
import { connect } from 'react-redux'
import { getDataBase } from '../selectors/database'
import { getUserTokenId } from '../selectors/auth'

const mapStateToProps = state => ({
  userToken: getUserTokenId(state),
})

export default connect(mapStateToProps)(MainPage)
