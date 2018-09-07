import AltInstance from 'lib'
import { TicTacToeActions } from 'actions'
import { adjust, isNil, find, map, compose, propEq, prop } from 'ramda'
import { getSymbol, calculateWinner } from './model'

class TicTacToeStore {
  constructor(){
    this.state = {
      game: TicTacToeActions.createGame()
    }

    this.bindListeners({
      update: TicTacToeActions.UPDATE_GAME,
      reset: TicTacToeActions.RESET_GAME,
    })
  }

  reset(newGame){
    this.state.game = newGame
  }

  changePlayer(){
    var nextPlayer = find(z => z.id !== this.state.game.currentPlayer.id)(this.state.game.players)
    this.state.game.currentPlayer = nextPlayer
  }

  reconcileBoard(){
    var newBoard = Array(9).fill(null)
    for (var i = 0; i < this.state.game.turns.length; i++) {
      var turn = this.state.game.turns[i]
      var symbol = getSymbol(turn.playerid)(this.state.game.players)
      newBoard = adjust(z => z = symbol, turn.square, newBoard)
    }

    this.state.game.board = newBoard
    if(calculateWinner(this.state.game.board)){
      this.state.game.winner = this.state.game.currentPlayer
    }
  }

  update(turn){
    if(!isNil(this.state.game.board[turn.square]) || !isNil(this.state.game.winner)){
      return
    }

    this.state.game.turns.push(turn)
    this.reconcileBoard()
    this.changePlayer()
  }
}

export default AltInstance.createStore(TicTacToeStore)