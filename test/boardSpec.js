describe('Board', () => {
  let board;

  beforeEach(() => {
    board = new Board();
  });

  it('should indicate if board exists', () => {
    expect(board).toBeDefined()
  });

  it('should be a 2d array that contains static information', () => {
    expect(board.template[0]).toContain(1);
    expect(board.template[1]).toContain(4);
    expect(board.template[2]).toContain(7);
    expect(board.template[0]).not.toContain(4);
    expect(board.template[1]).not.toContain(1);
    expect(board.template[2]).not.toContain(1);
  });
});
