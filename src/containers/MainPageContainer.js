import MainPage from '../components/MainPage'
import { connect } from 'react-redux'
import { getUserTokenId } from '../selectors/auth'
import { isVoteConfigShown } from '../selectors/voteConfig'
import { getVoteEnding } from '../selectors/voteData'

const mapStateToProps = state => ({
  userToken: getUserTokenId(state),
  showVoteConfig: isVoteConfigShown(state),
  isVoteEnding: getVoteEnding(state),
})

export default connect(mapStateToProps)(MainPage)
