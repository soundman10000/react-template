import React, { Component } from 'react'
import './style.scss'
import { TicTacToeActions } from 'actions'
import { TicTacToeStore } from 'stores'
import { find, filter, propEq } from 'ramda'
import { Name } from './name/name'
import { Symbol } from './symbol/symbol'
import { Color } from './color/color'
import { FireWorks } from './fireworks/fireworks'

export class Player extends Component{
  constructor(props){
    super(props)
    this.state = TicTacToeStore.getState()
    this.nameEdit = false
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

  get PlayerIsWinner(){
    if(!this.state.game.winner){
      return
    }

    return this.state.game.winner.id === this.props.id
  }

  componentDidMount(){
    TicTacToeStore.listen(() => this.onChange())
  }

  componentWillUnmount(){
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
    return <div className={ this.PlayerIsWinner ? "playerW" : "player"}>
      {this.PlayerIsWinner ? <FireWorks /> : null }
      <Name Player={ this.Player } IsCurrentPlayer={ this.IsCurrentPlayer } />
      <Symbol Player={ this.Player } /><Color Player={ this.Player } />
      <div className="turnContainer">
        { this.PlayerTurns.map((turn, ind) => this.renderTurn(turn, ind)) }
      </div>
    </div>
  }
}