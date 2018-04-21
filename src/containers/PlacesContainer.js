import Places from '../components/Places'
import { connect } from 'react-redux'
import { syncWithDb } from '../actions/database'
import { getDataBase } from '../selectors/database'

const mapStateToProps = state => ({
  database: getDataBase(state),
})

const mapDispatchToProps = dispatch => ({
  syncWithDatabase: () => dispatch(syncWithDb()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Places)
