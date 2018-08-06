describe('Board', () => {
  let board;
  let boardFactory;

  beforeEach(() => {
    boardFactory = new BoardFactory();
    board = boardFactory.build();
  });

  describe('template', () => {
    it('should be a 2d array that contains static information', () => {
      expect(board.template[0]).toContain(1);
      expect(board.template[1]).toContain(4);
      expect(board.template[0]).not.toContain(4);
      expect(board.template[1]).not.toContain(1);
    });
  });

  describe('winningCombo', () => {
    it('should be a 2d array that contains the winning combinations', () => {
      expect(board.winningCombo[0]).toEqual([1, 2, 3])
      expect(board.winningCombo[3]).toEqual([1, 4, 7])
      expect(board.winningCombo[0]).not.toEqual([3, 6, 9])
      expect(board.winningCombo[3]).not.toEqual([1, 2, 3])
    });
  });
});
