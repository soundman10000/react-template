import React, { Component } from 'react'
import './style.scss'
import { TicTacToeActions } from 'actions'
import { TicTacToeStore } from 'stores'
import { find } from 'ramda'

export class Player extends Component{
  constructor(props){
    super(props)
    this.state = TicTacToeStore.getState()
  }

  get Player(){
    return find(z => z.id === this.props.id)(this.state.game.players)
  }

  componentDidMount() {
    TicTacToeStore.listen(() => this.onChange())
  }

  componentWillUnmount() {
    TicTacToeStore.unlisten(() => this.onChange())
  }

  onChange(){
    this.setState(TicTacToeStore.getState())
  }

  render(){
    return <div className="player">
      <h4><span className="text">{this.Player.name}</span></h4>
    </div>
  }
}