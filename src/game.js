class Game {
  constructor(board = new BoardFactory(), player = new PlayerFactory()) {
    this.board = board.build();
    this.player1 = player.build();
    this.player2 = player.build();
    this.currentTurn = this.player1;
    this.moves = [];
  }

  switchTurn() {
    if (this.currentTurn === this.player1) {
      this.currentTurn = this.player2;
    } else {
      this.currentTurn = this.player1;
    }
  }

  move(position) {
    if (this.moves.includes(position)) {
      throw new TypeError(`Move ${position} taken.`)
    } else {
      this.moves.push(position)
      this.currentTurn.move(position);
    }
  }
}
