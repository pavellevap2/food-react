import { connect } from 'react-redux'
import { signOut } from '../actions/auth'
import Header from '../components/Header'
import { showVoteConfig } from '../actions/voteConfig'
import { getTimeRange } from '../selectors/voteConfig'

const mapStateToProps = state => ({
  timeRange: getTimeRange(state),
})

const mapDispatchToProps = dispacth => ({
  signOut: () => dispacth(signOut()),
  showVoteCongig: data => dispacth(showVoteConfig(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
