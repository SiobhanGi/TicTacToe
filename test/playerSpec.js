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

  describe('move', () => {
    it('increments currentMoves by 1 when called', () => {
      player.move();
      expect(player.currentMove).toEqual(1);
    });

    it('pushes position to array', () => {
      player.move(5);
      expect(player.moves).toContain(5);
      expect(player.moves.length).toEqual(1);
    });
  });
});
