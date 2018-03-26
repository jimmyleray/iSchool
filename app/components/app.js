import * as React from 'react'
import RouterProvider from '../providers/router'
import StoreProvider from '../providers/store'
import ThemeProvider from '../providers/theme'
import I18nProvider from '../providers/i18n'
import MainLayout from '../layouts/main'

export default () => (
  <StoreProvider>
    <I18nProvider>
      <ThemeProvider>
        <RouterProvider>
          <MainLayout />
        </RouterProvider>
      </ThemeProvider>
    </I18nProvider>
  </StoreProvider>
)
