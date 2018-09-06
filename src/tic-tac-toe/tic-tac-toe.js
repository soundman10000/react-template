import React from 'react'
import style from './style.scss'
import { Board } from './board/board'
import { Player } from './player/player'

export default React.createClass({
  render(){
    return <div className="viewContainer">
      <Player id={0} />
      <Board />
      <Player id={1} />
    </div>
  }
})