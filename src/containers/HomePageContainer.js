import { connect } from 'react-redux'
import { getPreloader } from '../selectors/restauraunts'
import HomePage from '../components/HomePage'
import { syncWidthDB } from '../actions/restaraunts'

const mapSateToProps = state => ({
  preloader: getPreloader(state),
})

const mapDispatchToProps = dispatch => ({
  syncWithDatabase: () => dispatch(syncWidthDB()),
})

export default connect(mapSateToProps, mapDispatchToProps)(HomePage)
