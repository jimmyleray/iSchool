import * as R from 'ramda'

const messages = {
  helloWorld: {
    en: 'Hello World !',
    fr: 'Bonjour tout le monde !'
  }
}

export default (locale = 'en') => {
  const res = {}
  R.keys(messages).forEach(key => (res[key] = messages[key][locale]))
  return res
}
