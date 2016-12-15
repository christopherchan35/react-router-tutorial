import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><Link to="/repos" activeClassName="active">Repos</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
