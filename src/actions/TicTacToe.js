import AltInstance from 'lib'
import { compose, range, map, head } from 'ramda'

const newPlayer = id => ({
    id,
    name: 'Player ' + (id + 1),
    symbol: id % 2 === 0 ? 'X' : 'O',
    color: id % 2 === 0 ? '#5BBC48' : '#9E679E',
  })

const createNewPlayers = compose(map(newPlayer), range(0));

class TicTacToeActions {
  createGame(){
    var players = createNewPlayers(2)
    return ({
      board: Array(9).fill(null),
      turns: [],
      players,
      currentPlayer: head(players)
    })
  }

  resetGame() {
    return this.createGame()
  }

  updateGame(playerid, square) {
    return { playerid, square }
  }
}

export default AltInstance.createActions(TicTacToeActions)