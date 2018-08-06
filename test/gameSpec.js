describe('Game', () => {
  let playerFactory;
  let player;
  let boardFactory;
  let board;
  let game;

  beforeEach(() => {
    playerFactory = new PlayerFactory();
    player = jasmine.createSpyObj('player', ['move', 'showMoves']);
    spyOn(playerFactory, 'build').and.returnValue(player);

    boardFactory = new BoardFactory();
    board = jasmine.createSpyObj('board', ['checkWinningCombo']);
    spyOn(boardFactory, 'build').and.returnValue(board);

    game = new Game(boardFactory, playerFactory);
  });

  describe('constructor', () => {
    it('initalises an empty array', () => {
      expect(game.moves.length).toEqual(0);
    });
    it('initalises currentTurn as player1', () => {
      expect(game.currentTurn).toEqual(game.player.one)
    });
  });

  describe('switchTurn', () => {
    it('switches currentTurn to player2 when called', () => {
      game.currentTurn = game.player.one;
      game.switchTurn();
      expect(game.currentTurn).toEqual(game.player.two);
    });
    it('switches currentTurn to player1 when called', () => {
      game.currentTurn = game.player.two;
      game.switchTurn();
      expect(game.currentTurn).toEqual(game.player.one);
    });
  });

  describe('move', () => {
    it('throws error if move is not valid', () => {
      game.moves = [5];
      expect(() => {
        game.move(5);
      }).toThrowError(TypeError, `Move ${game.moves} taken.`);
    });
    it('adds move to moves array if valid', () => {
      game.move(5);
      expect(game.moves.length).toEqual(1);
    });
  });

  describe('isWinningMove', () => {
    it('returns true if move was winning move', () => {
      player.showMoves.and.returnValue([3, 5, 7]);
      board.checkWinningCombo.and.returnValue([[3, 5, 7]])
      expect(game.isWinningMove()).toBe(true);
    });
    it('returns false if move was not winning move', () => {
      player.showMoves.and.returnValue([3, 5, 7]);
      board.checkWinningCombo.and.returnValue([[3, 6, 7]])
      expect(game.isWinningMove()).toBeUndefined();
    });
  });
});
