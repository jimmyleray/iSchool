import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from '../config/routes'

export default class extends React.Component {
  render() {
    return (
      <div className="content">
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact || false}
            />
          ))}
        </Switch>
      </div>
    )
  }
}
