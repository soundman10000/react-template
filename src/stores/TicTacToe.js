import AltInstance from 'lib'
import { TicTacToeActions } from 'actions'
import { adjust, isNil, not } from 'ramda'

class TicTacToeStore {
  constructor(){
    this.state = {
      game: TicTacToeActions.createGame()
    }

    this.bindListeners({
      update: TicTacToeActions.updateGame,
      reset: TicTacToeActions.resetGame
    })
  }

  reset(newGame){
    this.state.game = newGame
  }

  update({square, value}){
    var squares = this.state.game.board

    if(not(isNil(squares[square]))){
      return
    }

    this.state.game.board = adjust(z => z = value, square, squares)
    this.state.game.last = value
    this.state.game.turn++
  }
}

export default AltInstance.createStore(TicTacToeStore)