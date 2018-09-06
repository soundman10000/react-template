import React, { Component } from 'react'
import './style.scss'
import Alt from 'lib'
import { TicTacToeActions } from 'actions'

export class ResetGame extends Component {
  reset(){
    TicTacToeActions.resetGame('rest')
  }

  render(){
    return (
      <button onClick={() => this.reset()} className="reset">
        Reset
      </button>
    )
  }
}