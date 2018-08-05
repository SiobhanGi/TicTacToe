describe('Board', function() {
  let board;

  beforeEach(function() {
    board = new Board();
  });

  it('should indicate if board exists', function() {
    expect(board).toBeDefined()
  });
});
