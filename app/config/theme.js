import { createMuiTheme } from 'material-ui/styles'
import * as colors from 'material-ui/colors'

const theme = {
  palette: {
    primary: {
      main: colors.indigo[400]
    },
    secondary: {
      main: colors.red[400]
    }
  }
}

export default createMuiTheme(theme)
