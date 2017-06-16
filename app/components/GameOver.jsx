import React, { PropTypes } from 'react';

const GameOver = ({ winner, onNewGame }) => (
  <div className="game-over">
    <div className="congrats-block">
      <div className="congrats-title">
        {winner?`${winner} won!`:`It's a draw`}
      </div>
      <button onClick={onNewGame}>new game</button>
    </div>
  </div>
)

GameOver.propTypes = {
  winner: PropTypes.string,
  onNewGame: PropTypes.func.isRequired,
}

export default GameOver;