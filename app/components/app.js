import * as React from 'react'
import RouterProvider from '../providers/router'
import StoreProvider from '../providers/store'
import ThemeProvider from '../providers/theme'
import I18nProvider from '../providers/i18n'
import Layout from './layout'

export default class extends React.PureComponent {
  render() {
    return (
      <StoreProvider>
        <ThemeProvider>
          <I18nProvider>
            <RouterProvider>
              <Layout />
            </RouterProvider>
          </I18nProvider>
        </ThemeProvider>
      </StoreProvider>
    )
  }
}
