class Player {
  constructor() {
    this.MAX_MOVES = 3;
    this._currentMove = 0;
    this._moves = [];
  }

  move(position) {
    this._moves.push(position)
    this._currentMove++
  }

  showMoves() {
    return this._moves;
  }
}

function PlayerFactory() {
  return {
    build: () => new Player()
  };
}
