import React from 'react'
import * as R from 'ramda'
import { connect } from 'react-redux'
import { FormControl } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import { changeLocale } from '../store/locale'
import { languages } from '../config/i18n'

const mapStateToProps = state => ({
  locale: state.locale
})

const mapDispatchToProps = dispatch => ({
  onChange: event => {
    dispatch(changeLocale(event.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <form autoComplete="off" style={{ marginRight: '16px' }}>
    {props.locale}
    <FormControl>
      <Select name="locale" value={props.locale} onChange={props.onChange}>
        {R.keys(languages).map(key => (
          <MenuItem value={key} key={key}>
            {languages[key]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </form>
))
