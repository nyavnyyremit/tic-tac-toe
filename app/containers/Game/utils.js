const cellsEqual = (array) => array.every((value, i, arr) => typeof value !== 'undefined' && value == arr[0]);

export const detectWinner = (board) => {
  let winner = null;
  for (let index = 0; index < board.length; index++) {
    const row = board[index];
    if (cellsEqual(row)) {
      return row[0];
    }
  }
  for (let index = 0; index < board.length; index++) {
    const column = board.map(row => row[index]);
    if (cellsEqual(column)) {
      return column[0];
    }
  }
  const diagonals = [
    Array(board.length).fill().map((value, index) => board[index][index]),
    Array(board.length).fill().map((value, index) => board[board.length-index-1][index]),
  ];
  for (let index = 0; index < diagonals.length; index++) {
    const diagonal = diagonals[index];
    if (cellsEqual(diagonal)) {
      return diagonal[0];
    }
  }
  return null;
}

export const boardFull = (board) => {
  for (let index = 0; index < board.length; index++) {
    const row = board[index];
    for (let jndex = 0; jndex < row.length; jndex++) {
      if (typeof row[jndex] === 'undefined') {
        return false;
      }
    }
  }
  return true;
}