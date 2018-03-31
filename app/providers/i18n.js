import * as React from 'react'
import { connect } from 'react-redux'
import { addLocaleData, IntlProvider } from 'react-intl'
import fr from 'react-intl/locale-data/fr'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import Loading from '../components/loading'

addLocaleData([...fr, ...en, ...es])

const mapStateToProps = state => ({
  locale: state.i18n.locale
})

class i18n extends React.Component {
  constructor(props) {
    super(props)
    this.state = { messages: null }
  }

  loadTranslations(locale) {
    fetch(`/locale/${locale}`)
      .then(res => res.json())
      .then(messages => this.setState({ messages }))
  }

  componentDidMount() {
    this.loadTranslations(this.props.locale)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.messages === null) {
      this.loadTranslations(this.props.locale)
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.locale !== prevState.locale) {
      return {
        locale: nextProps.locale,
        messages: null
      }
    } else {
      return null
    }
  }

  render() {
    return this.state.messages ? (
      <IntlProvider locale={this.props.locale} messages={this.state.messages}>
        {this.props.children}
      </IntlProvider>
    ) : (
      <Loading />
    )
  }
}

export default connect(mapStateToProps)(i18n)
