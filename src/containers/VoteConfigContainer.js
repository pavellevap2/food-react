import { connect } from 'react-redux'
import { selectTimeRange, startVote } from '../actions/voteConfig'
import ConfigVotePopup from '../components/ConfigVotePopup'
import { getTimeRange } from '../selectors/voteConfig'

const mapStateToProps = state => ({
  timeRange: getTimeRange(state),
})

const mapDispatchToProps = dispatch => ({
  selectTimeRange: time => dispatch(selectTimeRange(time)),
  startVote: () => dispatch(startVote()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfigVotePopup)
