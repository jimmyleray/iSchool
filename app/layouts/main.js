import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from '../config/routes'
import Navbar from '../components/navbar'
import Page from '../components/page'

export default () => (
  <React.Fragment>
    <Navbar />
    <Page>
      {routes.map(route => (
        <Route
          key={route.path}
          exact={route.exact || false}
          path={route.path}
          component={route.component}
        />
      ))}
    </Page>
  </React.Fragment>
)
