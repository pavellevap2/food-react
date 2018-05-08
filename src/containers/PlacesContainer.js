import Places from '../components/Places'
import { connect } from 'react-redux'
import { syncWithDb } from '../actions/database'
import { getRestauraunts, getPreloader } from '../selectors/restauraunts'
import { makeVote } from '../actions/voteData'
import { getVotesTableData } from '../selectors/voteData'

const mapStateToProps = state => ({
  database: getRestauraunts(state),
  preloader: getPreloader(state),
  voteData: getVotesTableData(state),
})

const mapDispatchToProps = dispatch => ({
  syncWithDatabase: () => dispatch(syncWithDb()),
  makeVote: (vote, index) => dispatch(makeVote(vote, index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Places)
