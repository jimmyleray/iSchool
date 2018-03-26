export const changeLocale = locale => ({ type: 'CHANGE_LOCALE', locale })

export default (state = navigator.language || 'en', action) => {
  switch (action.type) {
    case 'CHANGE_LOCALE':
      return action.locale
    default:
      return state
  }
}
