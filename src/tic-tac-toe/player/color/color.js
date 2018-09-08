import React, { Component } from 'react'
import './style.scss'
import { TicTacToeActions } from 'actions'

export class Color extends Component{
  constructor(props){
    super(props)
  }

  handleChange(e){
    TicTacToeActions.updateColor(this.props.Player.id, e.target.value)
  }

  render(){
    return <div className="colorContainer">
      <input type="color" defaultValue={this.props.Player.color}  onChange={e => this.handleChange(e)} />
    </div>
  }
}