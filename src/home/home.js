import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render(){
    return (
      <div>
        <h1>Welcome to a react app.</h1>
        <Link to="">Home</Link>
        <Link to="ttt">Tic Tac Toe</Link>
        {this.props.children}
      </div>
    )
  }
})