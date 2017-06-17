import { detectWinner, boardFull } from './utils';

const BOARD_SIZE = 3;

const defaultState = {
  board: Array(BOARD_SIZE).fill().map(()=>Array(BOARD_SIZE).fill()),
  winner: null,
  finished: null
}
const game = (state = defaultState, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return defaultState;
    case 'NEXT_TURN':
      const board = state.board.map((row, index) => index===action.index?row.map((value, jndex) => jndex===action.jndex?action.player:value):row);
      const winner = detectWinner(board);
      const finished = winner || boardFull(board);
      return { board, winner, finished };
    default:
      return state;
  }
}

export default game;