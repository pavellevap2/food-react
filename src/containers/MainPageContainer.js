import MainPage from '../components/MainPage'
import { connect } from 'react-redux'
import { getUserTokenId } from '../selectors/auth'
import { isVoteConfigShown } from '../selectors/voteConfig'
import { getVoteTimeRange } from '../actions/voteData'
import { getVoteEnding } from '../selectors/voteData'

const mapStateToProps = state => ({
  userToken: getUserTokenId(state),
  showVoteConfig: isVoteConfigShown(state),
  isVoteEnding: getVoteEnding(state),
})

const mapDispatchToProps = dispatch => ({
  getVoteTimeRange: () => dispatch(getVoteTimeRange()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
