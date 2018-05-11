import Places from '../components/Places'
import { connect } from 'react-redux'
import {
  getRestauraunts,
  getPreloader,
  getRestaurauntsWidthVotes,
} from '../selectors/restauraunts'
import { makeVote } from '../actions/voteData'
import { getVotesTableData, getVoteEnding } from '../selectors/voteData'

const mapStateToProps = state => ({
  database: getRestauraunts(state),
  preloader: getPreloader(state),
  voteData: getVotesTableData(state),
  voteEnding: getVoteEnding(state),
  votesAndRestaraunts: getRestaurauntsWidthVotes(state),
})

const mapDispatchToProps = dispatch => ({
  makeVote: (vote, index) => dispatch(makeVote(vote, index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Places)
