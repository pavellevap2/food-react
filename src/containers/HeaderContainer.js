import { connect } from 'react-redux'
import { signOut } from '../actions/auth'
import Header from '../components/Header'
import { showVoteConfig } from '../actions/voteConfig'
import { getVoteEnding } from '../selectors/voteData'

const mapStateToProps = state => ({
  isVoteEnding: getVoteEnding(state),
})

const mapDispatchToProps = dispacth => ({
  signOut: () => dispacth(signOut()),
  showVoteConfig: data => dispacth(showVoteConfig(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
