import * as React from 'react'
import Typography from 'material-ui/Typography'
import { injectIntl, FormattedMessage } from 'react-intl'

export default injectIntl(() => (
  <Typography variant="title">
    <FormattedMessage id="helloWorld" defaultMessage="Not work !" />
  </Typography>
))
