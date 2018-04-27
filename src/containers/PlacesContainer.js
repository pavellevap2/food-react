import Places from '../components/Places'
import { connect } from 'react-redux'
import { syncWithDb } from '../actions/database'
import { getRestauraunts, getPreloader } from '../selectors/restauraunts'

const mapStateToProps = state => ({
  database: getRestauraunts(state),
  preloader: getPreloader(state),
})

const mapDispatchToProps = dispatch => ({
  syncWithDatabase: () => dispatch(syncWithDb()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Places)
