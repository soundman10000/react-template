import React, { Component } from 'react'
import './style.scss'
import { TicTacToeActions } from 'actions'
import { isNil } from 'ramda'

export class Square extends Component {
  constructor(props){
    super(props)
    this.style = {
      checked:{
        animation: 'scale .2s ease-in both'
      },
      notChecked: {},
      color: {},
    }
  }
  
  get IsChecked(){
    return !isNil(this.props.value)
  }

  click(){
    if(this.IsChecked){
      return
    }

    this.style.color = {
      color: `${this.props.player.color}`,
    }

    TicTacToeActions.updateGame(this.props.player.id, this.props.square)
  }

  render(){
    return (
      <button onClick={ () => this.click() } className="square" style={this.style.color}>
        <span className="value" style= {
          this.IsChecked
            ? this.style.checked
            : this.style.notChecked }>{this.props.value}
        </span>
      </button>
    )
  }
}