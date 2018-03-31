import React from 'react'
import * as R from 'ramda'
import { connect } from 'react-redux'
import { FormControl } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import { changeLocale } from '../store/i18n'
import { locales } from '../config/locales'

const mapStateToProps = state => ({
  locale: state.i18n.locale
})

const mapDispatchToProps = dispatch => ({
  onChange: event => {
    dispatch(changeLocale(event.target.value))
  }
})

class Locales extends React.PureComponent {
  render() {
    return (
      <form autoComplete="off" style={{ marginRight: '16px' }}>
        <FormControl>
          <Select name="locale" value={this.props.locale} onChange={this.props.onChange}>
            {R.keys(locales).map(key => (
              <MenuItem value={key} key={key}>
                {locales[key]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Locales)
