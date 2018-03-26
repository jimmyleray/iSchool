import * as React from 'react'
import Typography from 'material-ui/Typography'
import { FormattedMessage } from 'react-intl'

export default () => (
  <Typography variant="display1">
    <FormattedMessage id="homePage" defaultMessage="__homePage__" />
  </Typography>
)
