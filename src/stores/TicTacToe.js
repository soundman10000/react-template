import AltInstance from 'lib'
import { TicTacToeActions } from 'actions'
import { isNil, find, merge, head } from 'ramda'
import { calculateWinner, reconcileBoard, getPlayer, getNextPlayer } from './model'

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
    this.state.game.board = reconcileBoard(this.state.game.turns)(this.state.game.players)
  }

  changeColor(e){
    var player = getPlayer(e.playerId)(this.state.game.players)
    player.color = e.color
    this.state.game.board = reconcileBoard(this.state.game.turns)(this.state.game.players)
  }

  changePlayer(){
    this.state.game.currentPlayer = getNextPlayer(this.state.game.currentPlayer.id)(this.state.game.players)
  }

  update(turn){
    if(!isNil(this.state.game.board[turn.square]) || !isNil(this.state.game.winner)){
      return
    }

    this.state.game.turns.push(turn)
    this.state.game.board = reconcileBoard(this.state.game.turns)(this.state.game.players)

    var winner = calculateWinner(this.state.game.board)
    if(winner){
      this.state.game.winner = this.state.game.currentPlayer
      this.state.game.winningSquares = winner.squares
      return
    }

    this.changePlayer()
  }
}

export default AltInstance.createStore(TicTacToeStore)