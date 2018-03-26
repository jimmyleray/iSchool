import * as React from 'react'
import CssBaseline from 'material-ui/CssBaseline'
import { MuiThemeProvider } from 'material-ui/styles'
import theme from '../config/theme'

export default ({ children }) => (
  <React.Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  </React.Fragment>
)
