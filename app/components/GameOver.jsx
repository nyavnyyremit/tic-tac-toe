import React, { PropTypes } from 'react';

const GameOver = ({ winner, onNewGame }) => (
  <div className="game-over">
    <div className="congrats-block">
      <div className="congrats-title">
        {winner?`${winner} won!`:`It's a draw`}
      </div>
      <button className="primary-btn" onClick={onNewGame}>
        Start a new game
      </button>
    </div>
  </div>
)

GameOver.propTypes = {
  winner: PropTypes.string,
  onNewGame: PropTypes.func.isRequired,
}

export default GameOver;