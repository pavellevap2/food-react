import { connect } from 'react-redux'
import {
  showVoteConfig,
  selectStartTime,
  selectEndTime,
} from '../actions/voteConfig'
import ConfigVotePopup from '../components/ConfigVotePopup'
import { getEndTime, getStartTime } from '../selectors/voteConfig'

const mapStateToProps = state => ({
  endTime: getEndTime(state),
  startTime: getStartTime(state),
})

const mapDispatchToProps = dispatch => ({
  showVoteCongig: data => dispatch(showVoteConfig(data)),
  selectStartTime: time => dispatch(selectStartTime(time)),
  selectEndTime: time => dispatch(selectEndTime(time)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfigVotePopup)
