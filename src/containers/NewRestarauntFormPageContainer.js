import { connect } from 'react-redux'
import { showFinalCard } from '../actions/newRestauraunt'
import { getFinalCardShown } from '../selectors/newRestauraunt'
import NewRestarauntFormPage from '../components/NewRestaurauntForm/NewRestarauntFormPage'

const mapStateToProps = state => ({
  showFinalCard: getFinalCardShown(state),
})

export default connect(mapStateToProps)(NewRestarauntFormPage)
