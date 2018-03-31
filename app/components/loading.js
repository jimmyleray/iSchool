import * as React from 'react'
import { CircularProgress } from 'material-ui/Progress'

export default class extends React.Component {
  render() {
    return (
      <div style={{ padding: '10px' }}>
        <CircularProgress size={20} />
      </div>
    )
  }
}
