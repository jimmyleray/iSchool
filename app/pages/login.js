import * as React from 'react'
import Typography from 'material-ui/Typography'
import { FormattedMessage } from 'react-intl'

export default class extends React.PureComponent {
  render() {
    return (
      <Typography variant="display1">
        <FormattedMessage id="loginPage" defaultMessage="__loginPage__" />
      </Typography>
    )
  }
}
