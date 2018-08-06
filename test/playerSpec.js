describe('Player', () => {
  beforeEach(() => {
    player = new Player();
  });

  describe('Constructor', () => {
    it('initalises MAX_MOVE with 3', () => {
      expect(player.MAX_MOVES).toEqual(3);
    });
  });

  describe('move', () => {
    it('increments currentMoves by 1 when called', () => {
      player.move();
      expect(player._currentMove).toEqual(1);
    });

    it('pushes position to array', () => {
      player.move(5);
      expect(player._moves).toContain(5);
      expect(player._moves.length).toEqual(1);
    });
  });

  describe('showMoves', () => {
    it('shows moves stored in moves array', () => {
      expect(player.showMoves()).toEqual(player._moves);
    });
  });
});
