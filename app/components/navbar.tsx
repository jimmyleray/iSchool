import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

export default class extends React.PureComponent {
  render() {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit" style={{ flex: 1 }}>
            iSchool
          </Typography>
          <Button href="https://github.com/JimmyLERAY/iSchool" color="inherit">
            GitHub
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}
