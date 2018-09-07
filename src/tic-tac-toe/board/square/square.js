import React, { Component } from 'react'
import './style.scss'
import { TicTacToeActions } from 'actions'
import { isNil } from 'ramda'

export class Square extends Component {
  get IsChecked(){
    return !isNil(this.props.value)
  }

  click(){
    if(this.IsChecked){
      return
    }

    this.style = {
      color: `${this.props.player.color}`
    }

    TicTacToeActions.updateGame(this.props.player.id, this.props.square)
  }

  render(){
    return (
      <button onClick={ () => this.click() } className="square" style={this.style}>
        {this.props.value}
      </button>
    )
  }
}