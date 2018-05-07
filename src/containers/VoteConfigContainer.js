import { connect } from 'react-redux'
import { showVoteConfig, selectTimeRange } from '../actions/voteConfig'
import ConfigVotePopup from '../components/ConfigVotePopup'
import { getTimeRange } from '../selectors/voteConfig'

const mapStateToProps = state => ({
  timeRange: getTimeRange(state),
})

const mapDispatchToProps = dispatch => ({
  showVoteCongig: data => dispatch(showVoteConfig(data)),
  selectTimeRange: time => dispatch(selectTimeRange(time)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfigVotePopup)
