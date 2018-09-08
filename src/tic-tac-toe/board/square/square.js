import React, { Component } from 'react'
import './style.scss'
import { TicTacToeActions } from 'actions'
import { isNil, find, propEq } from 'ramda'

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
    this.checkedBy = null
  }

  componentDidUpdate(){
    if(!this.IsChecked){
      return
    }

    var player = find(propEq('id', this.checkedBy))(this.props.players)
    if(player.color !== this.style.color.color){
      this.setStyleColor(player.color)
      this.forceUpdate()
    }
  }

  get IsChecked(){
    return !isNil(this.props.value)
  }

  setStyleColor(color){
    this.style.color = {
      color: `${color}`,
    }
  }

  click(){
    if(this.IsChecked){
      return
    }

    this.setStyleColor(this.props.player.color)
    this.checkedBy = this.props.player.id
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