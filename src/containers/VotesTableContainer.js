import { connect } from 'react-redux'
import { takeVotesTable } from '../actions/voteData'
import VotesTable from '../components/VotesTable'

const mapDispatchToProps = dispatch => ({
  takeVotesTable: () => dispatch(takeVotesTable()),
})

export default connect(undefined, mapDispatchToProps)(VotesTable)
