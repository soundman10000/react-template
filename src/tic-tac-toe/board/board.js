import React from 'react'
import './style.scss'
import { Square } from './square/square'
import { range } from 'ramda'

export class Board extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      board: Array(9).fill(null),
    }
  }

  renderSquare(square, i){
    return <Square value={square} key={i} />
  }

  shouldComponentUpdate(){
    console.log('test');
  }

  render(){
    const status = 'Next player: X';

    return (
      <div className="container">
        <div className="status">{status}</div>
        <div className="board">
          { this.state.board.map((square, ind) => this.renderSquare(square, ind)) }
        </div>
      </div>
    )
  }
}