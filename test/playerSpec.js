describe('Player', () => {
  let player;
  let playerFactory;

  beforeEach(() => {
    playerFactory = new PlayerFactory();
    player = playerFactory.build();
  });

  describe('move', () => {
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
