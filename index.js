import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import home from './src/home/home'
import ttt from './src/tic-tac-toe/tic-tac-toe'

render((
  <Router history={hashHistory}>
    <Route path="/" component={home}>
    <Route path="/ttt" component={ttt}/>
    </Route>
  </Router>
), document.getElementById('app'))
