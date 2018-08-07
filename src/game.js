class Game {
  constructor(board = new BoardFactory(), player = new PlayerFactory()) {
    this.board = board.build();
    this.player = {
      one: player.build(),
      two: player.build(),
    };
    this.currentTurn = this.player.one;
    this.moves = [];
    this.names = this._names();
  }

  _names() {
    this.player.one.setName('1');
    this.player.two.setName('2');
  }

  switchTurn() {
    if ((this.currentTurn === this.player.one)) {
      this.currentTurn = this.player.two;
    } else {
      this.currentTurn = this.player.one;
    }
  }

  move(position) {
    this.checkMove(position);
    if (this.isWinningMove()) {
      return 'Game over.';
    } else if (this.isDraw()) {
      return 'Game over. Draw.';
    } else {
      this.switchTurn();
    }
  }

  checkMove(position) {
    if (!(this.board.grid().includes(position))) {
      throw new TypeError(`Move ${position} invalid.`);
    } else if (this.moves.includes(position)) {
      throw new TypeError(`Move ${position} taken.`);
    } else {
      this.moves.push(position);
      this.currentTurn.move(position);
    }
  }

  isWinningMove() {
    const moves = this.currentTurn.showMoves().sort();
    const combo = this.board.checkWinningCombo();
    for (let i = 0; i < combo.length; i++) {
      if (JSON.stringify(moves) === JSON.stringify(combo[i])) {
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
