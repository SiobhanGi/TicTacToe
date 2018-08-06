describe('Game', () => {
  let playerFactory;
  let player;
  let boardFactory;
  let board;
  let game;

  beforeEach(() => {
    playerFactory = new PlayerFactory();
    player = jasmine.createSpyObj('player', ['move']);
    spyOn(playerFactory, 'build').and.returnValue(player);

    boardFactory = new BoardFactory();
    board = jasmine.createSpyObj('board', ['winningCombo']);
    spyOn(boardFactory, 'build').and.returnValue(board);

    game = new Game(boardFactory, playerFactory);
  });

  describe('constructor', () => {
    it('initalises an empty array', () => {
      expect(game.moves.length).toEqual(0);
    });
    it('initalises currentTurn as player1', () => {
      expect(game.currentTurn).toEqual(game.player1)
    });
  });

  describe('switchTurn', () => {
    it('switches currentTurn to player2 when called', () => {
      game.switchTurn();
      expect(game.currentTurn).toEqual(game.player2);
    });
    it('switches currentTurn to player1 when called', () => {
      game.switchTurn();
      game.switchTurn();
      expect(game.currentTurn).toEqual(game.player1);
    });
  });
});
