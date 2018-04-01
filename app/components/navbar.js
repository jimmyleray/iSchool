import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import Locales from './locales'
import Flexbox from './flexbox'
import Menu from './menu'

export default class extends React.PureComponent {
  render() {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Link to="/" style={{ marginRight: '16px' }}>
            <Typography variant="title">
              i<b>School</b>
            </Typography>
          </Link>
          <Menu links={['individuals', 'professionals', 'contributors']} />
          <Flexbox />
          <Locales />
          <Menu links={['login', 'subscribe']} />
        </Toolbar>
      </AppBar>
    )
  }
}
