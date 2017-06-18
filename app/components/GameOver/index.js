import React, { PropTypes } from 'react'
import style from './style.scss'

const GameOver = ({ winner, onNewGame }) => (
  <div className={style.wrapper}>
    <div className={style.content}>
      <div className={style.title}>
        {winner?`${winner} won!`:'It\'s a draw'}
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

export default GameOver