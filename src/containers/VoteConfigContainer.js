import { connect } from 'react-redux'
import { showVoteConfig, selectStartTime } from '../actions/voteConfig'
import ConfigVotePopup from '../components/ConfigVotePopup'
import { getStartTime } from '../selectors/voteConfig'

const mapStateToProps = state => ({
  startTime: getStartTime(state),
})

const mapDispatchToProps = dispatch => ({
  showVoteCongig: data => dispatch(showVoteConfig(data)),
  selectStartTime: time => dispatch(selectStartTime(time)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfigVotePopup)
