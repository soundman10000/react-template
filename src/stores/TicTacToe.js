import AltInstance from 'lib'
import { TicTacToeActions } from 'actions'

class TicTacToeStore {
  constructor(){
    let { updateGame } = TicTacToeActions

    this.state = {
      board: Array(9).fill(null),
      last: 'O' //this will default to 'X' for firstPlayer
    }

    this.bindListeners({
      update: updateGame,
    })
  }

  update(i){
    const squares = this.state.board.slice();

    if(squares[i] !== null){
      return
    }

    squares[i] = this.state.last === 'X' ? 'O' : 'X';
    this.state.board = squares
    this.state.last = squares[i]
  }
}

export default AltInstance.createStore(TicTacToeStore)