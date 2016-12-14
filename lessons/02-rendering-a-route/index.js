import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Test from './modules/Test'
import{ Router, Route, hashHistory } from 'react-router'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Router path="/repos" component={Repos}/>
    <Router path="/about" component={About}/>
    <Router path="/test" component={Test}/>
  </Router>
), document.getElementById('app'))
