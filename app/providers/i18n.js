import * as React from 'react'
import { connect } from 'react-redux'
import { addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import messages from '../config/i18n'

addLocaleData([...en, ...fr])

const mapStateToProps = state => ({
  locale: state.locale
})

export default connect(mapStateToProps)(props => (
  <IntlProvider locale={props.locale} key={props.locale} messages={messages(props.locale)}>
    {props.children}
  </IntlProvider>
))
