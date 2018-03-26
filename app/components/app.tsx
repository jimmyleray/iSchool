import * as React from 'react'
import RouterProvider from '../providers/router'
import ThemeProvider from '../providers/theme'
import MainLayout from '../layouts/main'

export default class extends React.PureComponent {
  render() {
    return (
      <ThemeProvider>
        <RouterProvider>
          <MainLayout />
        </RouterProvider>
      </ThemeProvider>
    )
  }
}
