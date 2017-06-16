export const makeTurn = (index, jndex, player) => ({
  type: 'NEXT_TURN',
  index,
  jndex,
  player
})

export const newGame = () => ({
  type: 'NEW_GAME'
})