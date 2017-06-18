import React, { PropTypes } from 'react'
import style from './style.scss'

import Board from 'components/Board'
import GameOver from 'components/GameOver'

const Game = ({ board, players, winner, finished, onCellClick, onNewGame }) => (
  <div className={style.game}>
    {finished &&
      <GameOver winner={winner} onNewGame={onNewGame} />
    }
    <Board board={board} players={players} onCellClick={onCellClick} />
  </div>
)

Game.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  winner: PropTypes.string,
  finished: PropTypes.bool,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
  onNewGame: PropTypes.func.isRequired,
}

export default Game