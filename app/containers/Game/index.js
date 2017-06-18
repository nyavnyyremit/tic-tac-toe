import { makeTurn, newGame } from './actions'
import { connect } from 'react-redux'

import Game from 'components/Game'

Game.defaultProps = {
  players: ['X', 'O']
}

const mapStateToProps = state => {
  const { board, winner, finished } = state.game
  return { board, winner, finished }
}

const mapDispatchToProps = dispatch => {
  return {
    onCellClick: (index, jndex, player) => dispatch(makeTurn(index, jndex, player)),
    onNewGame: () => dispatch(newGame()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
