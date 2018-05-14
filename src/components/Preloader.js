import Replay from '@material-ui/icons/DataUsage'
import styled from 'styled-components'

const PreloaderIcon = styled(Replay)`
  animation: preloader-logo-spin infinite 5s linear;
  @keyframes preloader-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
export default PreloaderIcon
