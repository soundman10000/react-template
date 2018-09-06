import React, { Component } from 'react'
import './style.scss'
import Alt from 'lib'
import { TicTacToeActions } from 'actions'

export class ResetGame extends Component {

  render(){
    return (
      <button onClick={ TicTacToeActions.resetGame } className="reset">
        Reset
      </button>
    )
  }
}