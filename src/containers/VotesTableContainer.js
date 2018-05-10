import { connect } from 'react-redux'
import { takeVotesTable } from '../actions/voteData'
import VotesTable from '../components/VotesTable'
import { getVotesTableData } from '../selectors/voteData'

const mapStateToProps = state => ({
  votesTable: getVotesTableData(state),
})

const mapDispatchToProps = dispatch => ({
  takeVotesTable: () => dispatch(takeVotesTable()),
})

export default connect(mapStateToProps, mapDispatchToProps)(VotesTable)
