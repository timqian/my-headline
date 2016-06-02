
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Container from './Container'
import Main from './Main'
import Settings from './Settings'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Container} >
      <IndexRoute component={Main} />
      <Route path="/settings" component={Settings} />
    </Route>
  </Router>
), document.getElementById('root'))
