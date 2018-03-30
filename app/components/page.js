import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from '../config/routes'

export default class extends React.Component {
  render() {
    return (
      <div style={{ padding: '30px' }}>
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
