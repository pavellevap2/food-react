import MainPage from '../components/MainPage'
import { connect } from 'react-redux'
import { getUserTokenId } from '../selectors/auth'
import { isVoteConfigShown, getVoteEnding } from '../selectors/voteConfig'
import { getVoteTimeRange } from '../actions/voteParams'
import { getTimeRange } from '../selectors/voteParams'

const mapStateToProps = state => ({
  userToken: getUserTokenId(state),
  showVoteConfig: isVoteConfigShown(state),
  timeRange: getTimeRange(state),
})

const mapDispatchToProps = dispatch => ({
  getVoteTimeRange: () => dispatch(getVoteTimeRange()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
