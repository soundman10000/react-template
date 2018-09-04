import React from 'react'
import { Link } from 'react-router'
import './style.scss'

export default React.createClass({
  render(){
    return (
      <div className="container">
        <h1>Welcome to a react app.</h1>
        <Link to="">Home</Link>
        <Link to="ttt">Tic Tac Toe</Link>
        {this.props.children}
      </div>
    )
  }
})