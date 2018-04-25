import RestaurauntForm from '../components/NewRestaurauntForm'
import { connect } from 'react-redux'
import { getImageData } from '../selectors/newRestauraunt'
import { getImagesData } from '../actions/newRestauraunt'

const mapStateToProps = state => ({
  imageData: getImageData(state),
})

const mapDispatchToProps = dispatch => ({
  getImageData: data => dispatch(getImagesData(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurauntForm)
