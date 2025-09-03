import { Gameboard } from './gameboard';
describe('Gameboard', () => {
  let gameBoard;
  beforeEach(() => {
    gameBoard = new Gameboard();
  });

  test('Place ship with length = 1', () => {
    const length = 1;
    const actual = gameBoard.placeShip(length, 3, 0, 'bottom');
    expect(actual).toBe('Placed!');
    expect(gameBoard.board[3][0]).toBe(length);
  });
  test('Place ship with invalid length', () => {
    const length = 0;
    const actual = gameBoard.placeShip(length, 9, 9, 'left');
    expect(actual).toBe('Invalid!');
  });
  test('Place ship with invalid direction', () => {
    const length = 3;
    const actual = gameBoard.placeShip(length, 9, 9, 'right');
    expect(actual).toBe('Invalid!');
  });

  test('Place Ship with invalid coordinates', () => {
    const length = 3;
    const actual = gameBoard.placeShip(length, -1, 11, 'left');
    expect(actual).toBe('Invalid!');
  });

  test('Place Ship with Valid coordinates', () => {
    const length = 3;
    const actual = gameBoard.placeShip(length, 3, 7, 'top');
    expect(actual).toBe('Placed!');
  });
});
