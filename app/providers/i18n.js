import * as React from 'react'
import { connect } from 'react-redux'
import { addLocaleData, IntlProvider } from 'react-intl'
import fr from 'react-intl/locale-data/fr'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import messages from '../config/i18n'

addLocaleData([...fr, ...en, ...es])

const mapStateToProps = state => ({
  locale: state.locale
})

export default connect(mapStateToProps)(props => (
  <IntlProvider locale={props.locale} key={props.locale} messages={messages(props.locale)}>
    {props.children}
  </IntlProvider>
))
