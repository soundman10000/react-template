import AltInstance from 'lib'

class TicTacToeActions {
  createGame(){
    return ({
      board: Array(9).fill(null),
      last: 'O', //this will default to 'X' for firstPlayer,
      turn: 1,
    })
  }

  resetGame() {
    return this.createGame()
  }

  updateGame(square, value) {
    return { square, value }
  }
}

export default AltInstance.createActions(TicTacToeActions)