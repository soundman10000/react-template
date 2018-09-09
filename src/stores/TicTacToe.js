import AltInstance from 'lib'
import { TicTacToeActions, ToasterActions } from 'actions'
import { isNil, find, merge, head } from 'ramda'
import { calculateWinner, reconcileBoard, getPlayer, getNextPlayer } from './TicTacToe.model.js'

class TicTacToeStore {
  constructor(){
    this.state = {
      game: TicTacToeActions.createGame()
    }

    this.bindListeners({
      update: TicTacToeActions.UPDATE_GAME,
      reset: TicTacToeActions.RESET_GAME,
      updatePlayerName: TicTacToeActions.UPDATE_PLAYER_NAME,
      updatePlayerSymbol: TicTacToeActions.UPDATE_PLAYER_SYMBOL,
      changeColor: TicTacToeActions.UPDATE_COLOR,
    })
  }

  reset(newGame){
    this.state.game = merge(this.state.game, newGame)
    this.state.game.currentPlayer = head(this.state.game.players)
  }

  updatePlayerName(e){
    var player = getPlayer(e.playerId)(this.state.game.players)
    player.name = e.newName
  }

  updatePlayerSymbol(e){
    var player = getPlayer(e.playerId)(this.state.game.players)
    player.symbol = e.symbol
    this.reprojectGame()
  }

  changeColor(e){
    var player = getPlayer(e.playerId)(this.state.game.players)
    player.color = e.color
  }

  changePlayer(){
    this.state.game.currentPlayer = getNextPlayer(this.state.game.currentPlayer.id)(this.state.game.players)
  }

  reprojectGame(){
    this.state.game.board = reconcileBoard(this.state.game.turns)(this.state.game.players)
  }

  update(turn){
    if(!isNil(this.state.game.board[turn.square]) || !isNil(this.state.game.winner)){
      return
    }

    this.state.game.turns.push(turn)
    this.reprojectGame()

    var winner = calculateWinner(this.state.game.board)
    if(winner){
      this.state.game.winner = this.state.game.currentPlayer
      this.state.game.winningSquares = winner.squares

      var win = _ => ToasterActions.message(`${this.state.game.currentPlayer.name} won!`, 'SUCCESS')
      setTimeout(win, 10);
      return
    }

    if(this.state.game.turns.length === 9){
      var tie = _ => ToasterActions.message('Tie, ya\'ll both suck', 'ERROR')
      setTimeout(tie, 10);
    }

    this.changePlayer()
  }
}

export default AltInstance.createStore(TicTacToeStore)