import { compose, prop, propEq, find, adjust, not } from 'ramda'

export const getSymbol = id => compose(prop('symbol'), find(propEq('id', id)))

const winners = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const calculateWinner = squares => {
  for (let i = 0; i < winners.length; i++) {
    const [a, b, c] = winners[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], squares: [a, b, c] };
    }
  }
  return null;
}

export const reconcileBoard = turns => players => {
  var newBoard = Array(9).fill(null)
  for (var i = 0; i < turns.length; i++) {
    newBoard = adjust(z => z = getSymbol(turns[i].playerid)(players), turns[i].square, newBoard)
  }
  return newBoard
}

export const getPlayer = id => find(propEq('id', id))
export const getNextPlayer = id => find(z => not(propEq('id', id)(z)))
