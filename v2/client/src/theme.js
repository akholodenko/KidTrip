import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

export default createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    background: { default: '#efefef' }
  },
  typography: {
    useNextVariants: true
  }
})
