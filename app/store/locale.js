export const changeLocale = locale => ({ type: 'CHANGE_LOCALE', locale })

const defaultLocale = 'en'
const initialState = navigator && navigator.language ? navigator.language : defaultLocale

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LOCALE':
      return action.locale
    default:
      return state
  }
}
