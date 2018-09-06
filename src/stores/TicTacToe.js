import AltInstance from 'lib'
import { TicTacToeActions } from 'actions'

class TicTacToeStore {
  constructor(){
    let { updateGame, resetGame } = TicTacToeActions

    this.state = {
      board: Array(9).fill(null),
      last: 'O', //this will default to 'X' for firstPlayer,
      turn: 1,
      gameOver: false,
    }

    this.bindListeners({
      update: updateGame,
      reset: resetGame
    })
  }

  reset(){
    this.state.board = Array(9).fill(null)
    this.state.turn = 1
    this.state.gameOver = false
    this.state.last = 'O'
  }

  update(i){
    const squares = this.state.board.slice();

    if(squares[i] !== null){
      return
    }

    squares[i] = this.state.last === 'X' ? 'O' : 'X';
    this.state.board = squares
    this.state.last = squares[i]

    if(this.state.turn === 9){
      this.state.gameOver = true
      return
    }

    this.state.turn++
  }
}

export default AltInstance.createStore(TicTacToeStore)