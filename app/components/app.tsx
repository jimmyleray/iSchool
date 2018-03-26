import * as React from 'react'
import CssBaseline from 'material-ui/CssBaseline'
import { MuiThemeProvider } from 'material-ui/styles'
import theme from '../config/theme'
import Navbar from './navbar'

export default class extends React.PureComponent {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
      </MuiThemeProvider>
    )
  }
}
