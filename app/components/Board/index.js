import React, { PropTypes } from 'react';
import style from './style.scss';

import Cell from 'components/Cell';

const Board = ({ board, players, onCellClick }) => (
  <div>
    {board.map((row, index) =>
      <div key={index} className={style.row}>
        {row.map((value, jndex) =>
          <Cell key={jndex} value={value} players={players} onClick={(player) => onCellClick(index, jndex, player)} />
        )}
      </div>
    )}
  </div>
)

Board.propTypes = {
  board: PropTypes.array.isRequired,
  players: PropTypes.array.isRequired,
  onCellClick: PropTypes.func.isRequired,
}

export default Board;