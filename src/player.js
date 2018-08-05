class Player {
  constructor() {
    this.MAX_MOVES = 3;
    this.currentMove = 0;
    this.moves = [];
  }

  move(position) {
    this.moves.push(position)
    this.currentMove ++
  }
}
