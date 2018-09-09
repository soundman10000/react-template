import React, { Component } from 'react'
import './style.scss'
import { Square } from './square/square'
import { ResetGame } from './reset/reset'
import { range } from 'ramda'
import { TicTacToeStore } from 'stores'
import { TicTacToeActions, ToasterActions } from 'actions'

export class Board extends Component {
  constructor(props){
    super(props)
    this.state = TicTacToeStore.getState()
  }

  renderSquare(square, i){
    return <Square key={i}
      value={square}
      square={i}
      winningSquares={this.state.game.winningSquares}
      player={this.state.game.currentPlayer}
      players={this.state.game.players} />
  }

  componentDidMount() {
    TicTacToeStore.listen(() => this.onChange())
    setTimeout(function () {
      ToasterActions.message('There was an attempt', "SUCCESS")
    }, 10);

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
      <div className="board">
        { this.state.game.board.map((square, ind) => this.renderSquare(square, ind)) }
        <ResetGame />
      </div>
    )
  }
}