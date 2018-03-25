import * as React from 'react'
import CssBaseline from 'material-ui/CssBaseline'
import Navbar from './navbar'

export default class ISApp extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Navbar />
      </React.Fragment>
    )
  }
}
