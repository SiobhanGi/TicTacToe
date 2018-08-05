describe('Player', () => {
  beforeEach(() => {
    player = new Player();
  });

  describe('MAX_MOVES', () => {
    it('max number of moves should be 3', () => {
      expect(player.MAX_MOVES).toEqual(3);
    });
  });

  describe('currentMove', () => {
    it('initialises on zero', () => {
      expect(player.currentMove).toEqual(0);
    });
  });
});
