import React from 'react'
import './style.scss'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <div className="menu">
      <Link className="item" to="">Home</Link>
      <Link className="item" activeClassName="active" to="ttt">Tic Tac Toe</Link>
    </div>
  }
})
