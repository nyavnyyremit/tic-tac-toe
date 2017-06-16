import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Board from './Board';
import GameOver from './GameOver';

const Game = ({ board, players, winner, isDraw, onCellClick, onNewGame }) => (
  <div className="game">
    {(winner || isDraw) &&
      <GameOver winner={winner} onNewGame={onNewGame} />
    }
    <Board board={board} players={players} onCellClick={onCellClick} />
  </div>
)

Game.propTypes = {
  board: PropTypes.array.isRequired,
  winner: PropTypes.string,
  isDraw: PropTypes.bool,
  players: PropTypes.array.isRequired,
  onCellClick: PropTypes.func.isRequired,
  onNewGame: PropTypes.func.isRequired,
}

export default Game;