import React, { PropTypes } from 'react'
import style from './style.scss'

const Cell = ({ value, players, onClick }) => (
  <div className={style.cell}>
    {!value?
      players.map((player, index) => 
        <button className={style.player} key={index} onClick={()=>onClick(player)}>
          {player}
        </button>
      )
      :value
    }
  </div>
)

Cell.propTypes = {
  value: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Cell