describe('Game', () => {
  let playerFactory;
  let player;
  let boardFactory;
  let board;
  let game;
  let position;

  beforeEach(() => {
    playerFactory = new PlayerFactory();
    player = jasmine.createSpyObj('player', ['move', 'showMoves']);
    spyOn(playerFactory, 'build').and.returnValue(player);

    boardFactory = new BoardFactory();
    board = jasmine.createSpyObj('board', ['checkWinningCombo', 'size', 'grid']);
    spyOn(boardFactory, 'build').and.returnValue(board);

    game = new Game(boardFactory, playerFactory);
    board.grid.and.returnValue([1,2,3,4,5,6,7,8,9]);
    board.checkWinningCombo.and.returnValue([[3, 5, 7]])
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
    it('returns winning message if winning move', () => {
      position = 7;
      player.showMoves.and.returnValue([3, 5, 7]);
      expect(game.move(position)).toEqual('Game over.');
    });
    it('return draw message if draw', () => {
      board.size.and.returnValue(9);
      player.showMoves.and.returnValue([1, 2, 6]);
      game.moves = [1, 3, 2,
                    4, 6, 5,
                    7, 8];
      position = 9;
      expect(game.move(position)).toEqual('Game over. Draw.');
    });
    it('switches turn if not winning move or draw', () => {
      player.showMoves.and.returnValue([1]);
      position = 5;
      expect(game.move(position)).toEqual(game.switchTurn());
    });
  });

  describe('checkMove', () => {
    it('throws error if move is invalid', () => {
      position = 'i';
      expect(() => {
        game.checkMove(position);
      }).toThrowError(TypeError, `Move ${position} invalid.`);
    });

    it('throws error if move already taken', () => {
      game.moves = [5];
      position = 5;
      expect(() => {
        game.checkMove(position);
      }).toThrowError(TypeError, `Move ${position} taken.`);
    });

    it('adds move to moves array if valid', () => {
      position = 5;
      game.checkMove(position);
      expect(game.moves.length).toEqual(1);
    });
  });

  describe('isWinningMove', () => {
    it('returns true if move was winning move', () => {
      player.showMoves.and.returnValue([3, 5, 7]);
      expect(game.isWinningMove()).toBe(true);
    });
    it('returns false if move was not winning move', () => {
      player.showMoves.and.returnValue([3, 5, 6]);
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
});
