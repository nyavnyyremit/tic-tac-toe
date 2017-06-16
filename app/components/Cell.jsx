import React, { PropTypes } from 'react';

const Cell = ({ value, players, onClick }) => (
  <div className="cell">
    {!value?
      players.map((player, index) => 
        <button className="player-btn" key={index} onClick={()=>onClick(player)}>
          {player}
        </button>
      )
      :value
    }
  </div>
)

Cell.propTypes = {
  value: PropTypes.string,
  players: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Cell;