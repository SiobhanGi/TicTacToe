class Board {
  constructor() {
    this._template =
      [[1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]];

    this._winningCombo =
      [[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9],
       [1, 4, 7],
       [2, 5, 8],
       [3, 6, 9],
       [1, 5, 9],
       [3, 5, 7]]
  };

  checkWinningCombo() {
    return this._winningCombo;
  }
}

function BoardFactory() {
  return {
    build: () => new Board()
  };
}
