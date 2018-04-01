import * as React from 'react'
import Typography from 'material-ui/Typography'
import { FormattedMessage } from 'react-intl'
import MetaTags from 'react-meta-tags'
import { appTitle, titleSep } from '../config/metas'
import Button from 'material-ui/Button'

export default class extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <MetaTags>
          <title>
            {appTitle} {titleSep} Home
          </title>
        </MetaTags>
        <Typography variant="display1" className="center">
          <FormattedMessage id="homePage" defaultMessage="__homePage__" />
        </Typography>
      </React.Fragment>
    )
  }
}
