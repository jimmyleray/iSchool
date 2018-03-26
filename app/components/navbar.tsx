import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { Link } from 'react-router-dom'

export default () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <div style={{ flex: 1 }}>
        <Typography variant="title" color="inherit">
          iSchool
        </Typography>
      </div>
      <Link to="/about">
        <Button color="inherit">About</Button>
      </Link>
      <Button href="https://github.com/JimmyLERAY/iSchool" color="inherit">
        GitHub
      </Button>
    </Toolbar>
  </AppBar>
)
