import { Gameboard } from './gameboard';

describe('Place Ship', () => {
  let gameBoard;
  beforeEach(() => {
    gameBoard = new Gameboard();
  });

  test('Place ship with length = 1', () => {
    const length = 1;
    const actual = gameBoard.placeShip(length, 3, 0, 'bottom');
    expect(actual).toBe('Placed!');
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

describe('Receive attacks', () => {
  let gameBoard;
  beforeEach(() => {
    gameBoard = new Gameboard();
  });

  test('Board receive attacks at invalid position', () => {
    expect(gameBoard.receiveAttacks(-1, 10)).toBe('Invalid!');
  });

  test('Attack missed ships', () => {
    const length = 2;
    gameBoard.placeShip(length, 3, 7, 'top');
    const actual = gameBoard.receiveAttacks(3, 8);
    expect(actual).toBe('Missed!');
  });

  test('Attack at position already attacked', () => {
    const length = 2;
    gameBoard.placeShip(length, 3, 7, 'top');
    gameBoard.receiveAttacks(3, 5);
    expect(gameBoard.receiveAttacks(3, 5)).toBe('Already attacked!');
  });

  test('Hit ships : first hit', () => {
    const length = 2;
    gameBoard.placeShip(length, 3, 7, 'top');
    const firstHit = gameBoard.receiveAttacks(3, 7);
    expect(firstHit).toBe('Hit ship!');
  });

  test('Hit ships : second hit at same place of ship', () => {
    const length = 2;
    gameBoard.placeShip(length, 3, 7, 'top');
    gameBoard.receiveAttacks(3, 7);
    const secondHit = gameBoard.receiveAttacks(3, 7);
    expect(secondHit).toBe('Already attacked!');
  });
});
