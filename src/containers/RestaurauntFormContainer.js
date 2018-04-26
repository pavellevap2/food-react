import RestaurauntForm from '../components/NewRestaurauntForm'
import { connect } from 'react-redux'
import { getImageData, getRestData } from '../selectors/newRestauraunt'
import { getImagesData, getRestaurauntData } from '../actions/newRestauraunt'

const mapStateToProps = state => ({
  imageData: getImageData(state),
  restData: getRestData(state),
})

const mapDispatchToProps = dispatch => ({
  getImageData: data => dispatch(getImagesData(data)),
  getRestData: data => dispatch(getRestaurauntData(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurauntForm)
