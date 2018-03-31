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
            {appTitle} {titleSep} Subscribe
          </title>
        </MetaTags>
        <Typography variant="display1">
          <FormattedMessage id="subscribePage" defaultMessage="__subscribePage__" />
        </Typography>
      </React.Fragment>
    )
  }
}
