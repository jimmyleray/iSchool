import * as React from 'react'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.links.map((link, idx) => (
      <Link key={idx} to={`/${link}`}>
        <Button>
          <FormattedMessage id={link} defaultMessage={`__${link}__`} />
        </Button>
      </Link>
    ))
  }
}
