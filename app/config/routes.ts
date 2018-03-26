import Home from '../pages/home'
import Login from '../pages/login'
import Subscribe from '../pages/subscribe'

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/login', component: Login },
  { path: '/subscribe', component: Subscribe }
]

export default routes
