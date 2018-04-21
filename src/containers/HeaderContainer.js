import { connect } from 'react-redux'
import { logout } from '../actions/auth'
import Header from '../components/Header'

const mapDispatchToProps = dispacth => ({
  logout: () => dispacth(logout()),
})

export default connect(undefined, mapDispatchToProps)(Header)
