import RestaurauntForm from '../components/NewRestaurauntForm'
import { connect } from 'react-redux'
import { getImageData, getRestData } from '../selectors/newRestauraunt'
import {
  getImagesData,
  getRestaurauntData,
  submitRestData,
} from '../actions/newRestauraunt'

const mapStateToProps = state => ({
  imageData: getImageData(state),
  restData: getRestData(state),
})

const mapDispatchToProps = dispatch => ({
  getImageData: data => dispatch(getImagesData(data)),
  getRestData: data => dispatch(getRestaurauntData(data)),
  submitData: () => dispatch(submitRestData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurauntForm)
