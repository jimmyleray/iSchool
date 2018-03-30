import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

export default class extends React.PureComponent {
  render() {
    return <BrowserRouter>{this.props.children}</BrowserRouter>
  }
}
