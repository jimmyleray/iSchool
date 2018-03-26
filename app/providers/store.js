import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import locale from '../store/locale'

const store = createStore(
  combineReducers({ locale })
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default ({ children }) => <Provider store={store}>{children}</Provider>
