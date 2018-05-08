import MainPage from '../components/MainPage'
import { connect } from 'react-redux'
import { getUserTokenId } from '../selectors/auth'
import { isVoteConfigShown, getVoteEnding } from '../selectors/voteConfig'
import { getVoteTimeRange } from '../actions/voteParams'

const mapStateToProps = state => ({
  userToken: getUserTokenId(state),
  showVoteConfig: isVoteConfigShown(state),
})

const mapDispatchToProps = dispatch => ({
  getVoteTimeRange: () => dispatch(getVoteTimeRange()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
