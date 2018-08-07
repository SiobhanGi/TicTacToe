describe('Board', () => {
  let board;
  let boardFactory;

  beforeEach(() => {
    boardFactory = new BoardFactory();
    board = boardFactory.build();
  });

  describe('checkWinningCombo', () => {
    it('should return winning combinations', () => {
      expect(board.checkWinningCombo()).toEqual(board._winningCombo);
    });
  });

  describe('size', () => {
    it('should return size of board', () => {
      expect(board.size()).toEqual(board._grid.length);
    });
  });
});
