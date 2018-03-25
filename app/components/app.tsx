import * as React from 'react'
import { CssBaseline } from 'material-ui'
import ISNavbar from './navbar'

export default class ISApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <ISNavbar />
      </React.Fragment>
    )
  }
}
