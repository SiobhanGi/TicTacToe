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
    if (!(this.currentTurn = this.player.two)) {
      this.currentTurn = this.player.two;
    } else {
      this.currentTurn = this.player.one;
    }
  }

  move(position) {
    if (this.moves.includes(position)) {
      throw new TypeError(`Move ${position} taken.`)
    } else {
      this.moves.push(position);
      this.currentTurn.move(position);
    }
  }

  isWinningMove() {
    let moves = this.currentTurn.showMoves().sort();
    let combo = this.board.checkWinningCombo();
    for (let i = 0; i < combo.length; i++) {
      if (JSON.stringify(moves) == JSON.stringify(combo[i])) {
        return true;
      }
    }
  }

  isDraw() {
    if (this.moves.length === this.board.size()) {
      return true;
    }
  }

}
