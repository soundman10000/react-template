import AltInstance from 'lib'
import { TicTacToeActions } from 'actions'
import { isNil, find } from 'ramda'
import { getSymbol, calculateWinner, reconcileBoard } from './model'

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

  update(turn){
    if(!isNil(this.state.game.board[turn.square]) || !isNil(this.state.game.winner)){
      return
    }

    this.state.game.turns.push(turn)
    this.state.game.board = reconcileBoard(this.state.game.turns)(this.state.game.players)

    if(calculateWinner(this.state.game.board)){
      this.state.game.winner = this.state.game.currentPlayer
      return
    }

    this.changePlayer()
  }
}

export default AltInstance.createStore(TicTacToeStore)