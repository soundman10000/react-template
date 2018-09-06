import React, { Component } from 'react'
import './style.scss'
import { Square } from './square/square'
import { ResetGame } from './reset/reset'
import { range } from 'ramda'
import { TicTacToeStore } from 'stores'
import { TicTacToeActions } from 'actions'

export class Board extends Component {
  constructor(props){
    super(props)
    this.state = TicTacToeStore.getState()
  }

  get NextPlayer(){
    return this.state.game.last === 'X' ? 'O' : 'X'
  }

  get IsCompleted() {
    return this.state.game.turn === 10
  }

  renderSquare(square, i){
    return <Square value={square} key={i} square={i} next={this.NextPlayer} />
  }

  componentDidMount() {
    TicTacToeStore.listen(() => this.onChange())
    TicTacToeActions.resetGame()
  }

  componentWillUnmount() {
    TicTacToeStore.unlisten(() => this.onChange())
  }

  onChange(){
    this.setState(TicTacToeStore.getState())
  }

  render(){
    return (
      <div ref="container" className="container">
        <div className="status">Next Player: { this.NextPlayer }</div>
        <div className="turn">Turn: { this.state.game.turn }</div>
        <div className="board">
          { this.state.game.board.map((square, ind) => this.renderSquare(square, ind)) }
          <ResetGame />
        </div>

      </div>
    )
  }
}