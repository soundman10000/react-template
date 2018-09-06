import AltInstance from 'lib'

class TicTacToeActions {
  resetGame(thing){
    return thing
  }

  updateGame(selection){
    return selection
  }
}

export default AltInstance.createActions(TicTacToeActions)