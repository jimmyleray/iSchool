import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { Link } from 'react-router-dom'
import { injectIntl, FormattedMessage } from 'react-intl'
import Locales from './locales'

export default () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Link to="/">
        <Typography variant="title" color="inherit">
          iSchool
        </Typography>
      </Link>
      <div style={{ flex: 1 }} />
      <Locales />
      <Link to="/login">
        <Button color="inherit">
          <FormattedMessage id="login" defaultMessage="__login__" />
        </Button>
      </Link>
      <Button href="https://github.com/JimmyLERAY/iSchool" color="inherit">
        GitHub
      </Button>
    </Toolbar>
  </AppBar>
)
