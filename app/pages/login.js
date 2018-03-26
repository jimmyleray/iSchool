import * as React from 'react'
import Typography from 'material-ui/Typography'
import { FormattedMessage } from 'react-intl'

export default () => (
  <Typography variant="title">
    <FormattedMessage id="loginPage" defaultMessage="__loginPage__" />
  </Typography>
)
