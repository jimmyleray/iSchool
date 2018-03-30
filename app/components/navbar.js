import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import Locales from './locales'

export default class extends React.PureComponent {
  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Link to="/">
            <Typography variant="title">
              i<b>School</b>
            </Typography>
          </Link>
          <div style={{ flex: 1 }} />
          <Locales />
          <Link to="/login">
            <Button>
              <FormattedMessage id="login" defaultMessage="__login__" />
            </Button>
          </Link>
          <Button href="https://github.com/JimmyLERAY/iSchool" color="inherit">
            GitHub
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}
