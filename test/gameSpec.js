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
    board = jasmine.createSpyObj('board', ['checkWinningCombo', 'size', 'grid']);
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
        game.checkMove(5);
      }).toThrowError(TypeError, `Move ${game.moves} taken.`);
    });
    it('adds move to moves array if valid', () => {
      game.checkMove(5);
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

  describe('isDraw', () => {
    it('returns true if game is draw', () => {
      game.moves = [1, 2, 3,
                    4, 5, 6,
                    7, 8, 9];
      board.size.and.returnValue(9)
      expect(game.isDraw()).toBe(true);
    });
    it('returns undefined if not a draw', () => {
      board.size.and.returnValue(9)
      expect(game.isDraw()).toBeUndefined();
    });
  });

  describe('invalid move', () => {
    it('throws error if move is invalid', () => {
      board.grid.and.returnValue([1,2,3,4,5,6,7,8,9]);
      let position = 'i';
      expect(() => {
        game.invalidMove(position);
      }).toThrowError(TypeError, `Move ${position} invalid.`);
    });
  })
});
