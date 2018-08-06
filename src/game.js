class Game {
  constructor(board = new BoardFactory(), player = new PlayerFactory()) {
    this.board = board.build();
    this.player = {
      one: player.build(),
      two: player.build()
    };
    this.currentTurn = this.player.one;
    this.moves = [];
  }

  switchTurn() {
    if (this.currentTurn = this.player.one) {
      this.currentTurn = this.player.two;
    } else {
      this.currentTurn = this.player.one;
    }
  }

  move(position) {
    if (this.moves.includes(position)) {
      throw new TypeError(`Move ${position} taken.`)
    } else {
      console.log(position);
      this.moves.push(position);
      this.currentTurn.move(position);
    }
  }
}
