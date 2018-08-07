class Player {
  constructor() {
    this._moves = [];
    this.name;
  }

  setName(name) {
    this.name = name;
  }

  move(position) {
    this._moves.push(position)
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
