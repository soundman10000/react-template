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
      <div className="container">
        <div className="status">{status}</div>
        <div className="board">
          { squares.map(this.renderSquare) }
        </div>
      </div>
    )
  }
}