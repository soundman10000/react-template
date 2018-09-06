import React, { Component } from 'react'
import './style.scss'
import { TicTacToeActions } from 'actions'

export class Square extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.value
    }
  }

  render(){
    return (
      <button onClick={() => TicTacToeActions.updateGame(this.props.square, this.props.next)} className="square">
        {this.props.value}
      </button>
    )
  }
}