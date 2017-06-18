import React, { PropTypes } from 'react'
import style from './style.scss'

import Cell from 'components/Cell'

const Board = ({ board, players, onCellClick }) => (
  <div>
    {board.map((row, index) =>
      <div key={index} className={style.row}>
        {row.map((value, jndex) =>
          <Cell key={jndex} players={players} value={value} onClick={(player) => onCellClick(index, jndex, player)} />
        )}
      </div>
    )}
  </div>
)

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
}

export default Board