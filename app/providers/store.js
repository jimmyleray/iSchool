import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import i18n from '../store/i18n'

const store = createStore(
  combineReducers({ i18n })
  // Debugging purposes in navigator with devtools extension
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default class extends React.PureComponent {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}
