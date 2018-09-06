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

  renderSquare(square, i){
    return <Square value={square} key={i} square={i} player={this.state.game.currentPlayer.id} />
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
        <div className="status">Player Up: { this.state.game.currentPlayer.name }</div>
        <div className="turn">Turn: { this.state.game.turns.length }</div>
        <div className="board">
          { this.state.game.board.map((square, ind) => this.renderSquare(square, ind)) }
          <ResetGame />
        </div>

      </div>
    )
  }
}