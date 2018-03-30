import * as React from 'react'
import { connect } from 'react-redux'
import { addLocaleData, IntlProvider } from 'react-intl'
import fr from 'react-intl/locale-data/fr'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import { messagesWithLocale } from '../config/i18n'

addLocaleData([...fr, ...en, ...es])

const mapStateToProps = state => ({
  locale: state.i18n.locale
})

class i18n extends React.PureComponent {
  render() {
    return (
      <IntlProvider locale={this.props.locale} messages={messagesWithLocale(this.props.locale)}>
        {this.props.children}
      </IntlProvider>
    )
  }
}

export default connect(mapStateToProps)(i18n)
