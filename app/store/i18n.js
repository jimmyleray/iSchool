import * as R from 'ramda'

/**
 * Actions
 **/
export const changeLocale = locale => ({ type: 'CHANGE_LOCALE', locale })

/**
 * Reducers
 **/
const initialState = {
  locale: navigator && navigator.language ? R.take(2, navigator.language) : 'en'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LOCALE':
      return { locale: action.locale }
    default:
      return state
  }
}
