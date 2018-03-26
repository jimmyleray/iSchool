import React from 'react'
import { connect } from 'react-redux'
import { FormControl } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import { injectIntl } from 'react-intl'
import { changeLocale } from '../store/locale'

const mapStateToProps = state => ({
  locale: state.locale
})

const mapDispatchToProps = dispatch => ({
  onChange: event => {
    dispatch(changeLocale(event.target.value))
  }
})

export default injectIntl(
  connect(mapStateToProps, mapDispatchToProps)(props => (
    <form autoComplete="off">
      <FormControl>
        <Select
          value={props.locale}
          onChange={props.onChange}
          inputProps={{
            name: 'locale',
            id: 'locale'
          }}
          style={{ color: 'inherit' }}
        >
          <MenuItem value="fr">FR</MenuItem>
          <MenuItem value="en">EN</MenuItem>
        </Select>
      </FormControl>
    </form>
  ))
)
