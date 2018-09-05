import React from 'react'
import './style.scss'
import { Square } from './square/square'
import { range } from 'ramda'

export class Board extends React.Component {
  renderSquare(i){
    return <Square value={i} />
  }


  render(){
    const squares = range(0,9);
    const status = 'Next player: X';

    return (
      <div>
      <ul>

  </ul>
        <div className="status">{status}</div>
        { squares.map(this.renderSquare) }
      </div>
    )
  }
}