import AltInstance from 'lib'
import { TicTacToeActions } from 'actions'

class TicTacToeStore {
  constructor(){
    let { updateGame } = TicTacToeActions

    this.state = {
      board: Array(9).fill(null),
    }

    this.bindListeners({
      update: updateGame,
    })
  }

  update(i){
    const squares = this.state.board.slice();
    squares[i] = 'X';
    this.setState({board: squares});
    console.log(this.state.board);
  }
}

export default AltInstance.createStore(TicTacToeStore)