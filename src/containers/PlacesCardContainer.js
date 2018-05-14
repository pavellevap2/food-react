import { connect } from 'react-redux'
import { getLikePreloaderStatus } from '../selectors/voteData'
import PlacesCard from '../components/Places/PlacesCard'

const mapStateToProps = state => ({
  showPreloader: getLikePreloaderStatus(state),
})

export default connect(mapStateToProps)(PlacesCard)
