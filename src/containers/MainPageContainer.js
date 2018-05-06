import MainPage from '../components/MainPage'
import { connect } from 'react-redux'
import { getUserTokenId } from '../selectors/auth'
import { isVoteConfigShown } from '../selectors/voteConfig'
import { checkVoteState } from '../actions/voteConfig'

const mapStateToProps = state => ({
  userToken: getUserTokenId(state),
  showVoteConfig: isVoteConfigShown(state),
})

const mapDispatchToProps = dispatch => ({
  checkVoteState: () => dispatch(checkVoteState()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
