import Home from '../pages/home'
import Login from '../pages/login'
import Subscribe from '../pages/subscribe'
import Individuals from '../pages/individuals'
import Professionals from '../pages/professionals'
import Contributors from '../pages/contributors'

export const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/login', component: Login },
  { path: '/subscribe', component: Subscribe },
  { path: '/individuals', component: Individuals },
  { path: '/professionals', component: Professionals },
  { path: '/contributors', component: Contributors }
]
