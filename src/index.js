
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Main from './components'

render((
  <Router history={browserHistory}>
    <Route path="/my-headline(/**)" component={Main} >
    </Route>
  </Router>
), document.getElementById('root'))
