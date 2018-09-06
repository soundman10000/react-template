import React, { Component } from 'react'
import './style.scss'
import { TicTacToeActions } from 'actions'

export class Square extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <button onClick={() => TicTacToeActions.updateGame(this.props.player, this.props.square)} className="square">
        {this.props.value}
      </button>
    )
  }
}