import * as R from 'ramda'

const messages = {
  hello: {
    en: 'Hello World !',
    fr: 'Bonjour le monde !',
    es: 'Hola Mundo !'
  },
  login: {
    en: 'Login',
    fr: 'Connexion',
    es: 'Conexión'
  },
  loginPage: {
    en: 'Login page',
    fr: 'Page de connexion',
    es: 'Página de acceso'
  }
}

export default R.memoize((locale = 'en') => {
  const res = {}
  R.keys(messages).forEach(key => {
    res[key] = messages[key][locale]
  })
  return res
})
