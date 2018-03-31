import * as React from 'react'
import Typography from 'material-ui/Typography'
import { FormattedMessage } from 'react-intl'
import MetaTags from 'react-meta-tags'
import { appTitle, titleSep } from '../config/metas'

export default class extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <MetaTags>
          <title>
            {appTitle} {titleSep} Individuals
          </title>
        </MetaTags>
        <Typography variant="display1">
          <FormattedMessage id="individualsPage" defaultMessage="__individualsPage__" />
        </Typography>
      </React.Fragment>
    )
  }
}
