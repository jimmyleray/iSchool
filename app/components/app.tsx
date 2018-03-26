import * as React from 'react'
import ThemeProvider from '../providers/theme'
import MainLayout from '../layouts/main'

export default class extends React.PureComponent {
  render() {
    return (
      <ThemeProvider>
        <MainLayout />
      </ThemeProvider>
    )
  }
}
