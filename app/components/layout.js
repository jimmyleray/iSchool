import * as React from 'react'
import Navbar from './navbar'
import Page from './page'

export default class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Page />
      </React.Fragment>
    )
  }
}
