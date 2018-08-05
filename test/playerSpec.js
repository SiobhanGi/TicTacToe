describe('Player', () => {
  beforeEach(() => {
    player = new Player();
  });

  describe('Constructor', () => {
    it('initalises MAX_MOVE with 3', () => {
      expect(player.MAX_MOVES).toEqual(3);
    });

    it('initialises currentMove on zero', () => {
      expect(player.currentMove).toEqual(0);
    });

    it('it initialises moves as an empty array', () => {
      expect(player.moves).toEqual([]);
    });
  });
});
