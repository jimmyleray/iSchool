import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from '../config/routes'
import Navbar from '../components/navbar'
import Home from '../pages/home'

export default class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {routes.map(route => (
          <Route
            key={route.path}
            exact={route.exact || false}
            path={route.path}
            component={route.component}
          />
        ))}
      </React.Fragment>
    )
  }
}
