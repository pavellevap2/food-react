import MainPage from '../components/MainPage'
import { connect } from 'react-redux'
import { getUserTokenId } from '../selectors/auth'
import { isVoteConfigShown, getVoteEnding } from '../selectors/voteConfig'

const mapStateToProps = state => ({
  userToken: getUserTokenId(state),
  showVoteConfig: isVoteConfigShown(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
