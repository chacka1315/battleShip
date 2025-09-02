import { Ship } from './ship';
describe('Ship', () => {
  let ship;
  beforeEach(() => {
    ship = new Ship(3);
  });
  test('Not sunk just after creation', () => {
    expect(ship.isSunk()).toBe(false);
  });

  test('Check sunk ship', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test('Check ship remain sunk after hits while sunk', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test('Check not sunk ship', () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
  });
});
