import * as React from 'react'
import CssBaseline from 'material-ui/CssBaseline'
import { MuiThemeProvider } from 'material-ui/styles'
import theme from '../config/theme'

export default class extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>{this.props.children}</MuiThemeProvider>
      </React.Fragment>
    )
  }
}
