import React, { Component } from 'react'
import './style.scss'
import { TicTacToeActions } from 'actions'
import { TicTacToeStore } from 'stores'
import { find, filter, propEq } from 'ramda'

export class Player extends Component{
  constructor(props){
    super(props)
    this.state = TicTacToeStore.getState()
  }

  get Player(){
    return find(z => z.id === this.props.id)(this.state.game.players)
  }

  get IsCurrentPlayer(){
    return this.props.id === this.state.game.currentPlayer.id
  }

  get PlayerTurns(){
    return filter(propEq('playerid', this.props.id))(this.state.game.turns)
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

  renderTurn(turn, ind){
    var numberTurn = (this.props.id) + (ind * 2) + 1
    return <div className="move" key={ind}>
      <div className="info">
        <span className="turn">{numberTurn}</span>
        <span className="sqaure">Square {turn.square + 1}</span>
      </div>
    </div>
  }

  render(){
    return <div className="player">
      <h4><span className= { this.IsCurrentPlayer ? 'underline' : 'text' }>{ this.Player.name }</span></h4>
      <div className="turnContainer">
        { this.PlayerTurns.map((turn, ind) => this.renderTurn(turn, ind)) }
      </div>
    </div>
  }
}