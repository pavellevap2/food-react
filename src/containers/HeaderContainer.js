import { connect } from 'react-redux'
import { signOut } from '../actions/auth'
import Header from '../components/Header'

const mapDispatchToProps = dispacth => ({
  signOut: () => dispacth(signOut()),
})

export default connect(undefined, mapDispatchToProps)(Header)
