import React from 'react'
import './style.scss'
import { Square } from './square/square'
import { range } from 'ramda'
import { TicTacToeStore } from 'stores'
import { TicTacToeActions } from 'actions'

export class Board extends React.Component {
  constructor(props){
    super(props)

    this.state = TicTacToeStore.getState()
  }

  get NextPlayer(){
    return this.state.last === 'X' ? 'O' : 'X'
  }

  renderSquare(square, i){
    return <Square value={square} key={i} click={() => this.checkSquare(i)} />
  }

  checkSquare(number){
    TicTacToeActions.updateGame(number)
  }

  componentDidMount() {
    TicTacToeStore.listen(() => this.onChange());
  }

  onChange(){
    this.setState(TicTacToeStore.getState())
  }

  render(){
    return (
      <div className="container">
        <div className="status">Next Player: {this.NextPlayer}</div>
        <div className="board">
          { this.state.board.map((square, ind) => this.renderSquare(square, ind)) }
        </div>
      </div>
    )
  }
}