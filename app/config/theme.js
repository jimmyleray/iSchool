import { createMuiTheme } from 'material-ui/styles'
import * as colors from 'material-ui/colors'

const theme = {
  palette: {
    primary: {
      main: colors.orange[300]
    },
    secondary: {
      main: colors.blue[300]
    }
  }
}

export default createMuiTheme(theme)
