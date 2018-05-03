import { connect } from 'react-redux'
import { showVoteConfig } from '../actions/voteConfig'
import ConfigVotePopup from '../components/ConfigVotePopup'

const mapDispatchToProps = dispatch => ({
  showVoteCongig: data => dispatch(showVoteConfig(data)),
})

export default connect(undefined, mapDispatchToProps)(ConfigVotePopup)
