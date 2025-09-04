import { Ship } from './ship';
export class Gameboard {
  constructor() {
    this.board = this.#createBoard();
    this.ships = [];
  }

  #createBoard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        //Fill bord with 0; 0 means there is no ship, just water.
        board[i][j] = 0;
      }
    }
    return board;
  }
  getBoard() {
    return this.board;
  }
  placeShip(length, i1, j1, direction) {
    if (!this.isValidCoordinate(i1, j1)) return 'Invalid!';
    if (length < 1) return 'Invalid!';

    const ship = new Ship(length);
    if (length === 1 && !this.board[i1][j1]) {
      if (this.adjacentShip(i1, j1)) return 'Invalid!';
      //Fill that board position with ship id
      this.board[i1][j1] = ship.id;
      this.ships.push(ship);
      return 'Placed!';
    }

    const otherCoordinates = this.findOtherCoordinates(
      length,
      i1,
      j1,
      direction
    );

    const i2 = otherCoordinates[0];
    const j2 = otherCoordinates[1];
    if (!this.isValidCoordinate(i2, j2)) return 'Invalid!';
    if (this.shipAt(i1, i2, j1, j2)) return 'Invalid!';
    if (this.adjacentShip(i1, i2, j1, j2)) return 'Invalid!';

    if (i1 === i2 && j1 < j2) {
      for (let j = j1; j <= j2; j++) {
        this.board[i1][j] = ship.id;
      }
    } else {
      for (let j = j2; j <= j1; j++) {
        this.board[i1][j] = ship.id;
      }
    }

    if (j1 === j2 && i1 < i2) {
      for (let i = i1; i <= i2; i++) {
        this.board[i][j1] = ship.id;
      }
    } else {
      for (let i = i2; i <= i1; i++) {
        this.board[i][j1] = ship.id;
      }
    }
    this.ships.push(ship);
    return 'Placed!';
  }

  shipAt(i1, i2, j1, j2) {
    if (i1 === i2 && j1 < j2) {
      for (let j = j1; j <= j2; j++) {
        if (this.board[i1][j]) return true;
      }
    } else {
      for (let j = j2; j <= j1; j++) {
        if (this.board[i1][j]) return true;
      }
    }

    if (j1 === j2 && i1 < i2) {
      for (let i = i1; i <= i2; i++) {
        if (this.board[i][j1]) return true;
      }
    } else {
      for (let i = i2; i <= i1; i++) {
        if (this.board[i][j1]) return true;
      }
    }
    return false;
  }

  adjacentShip(i1, i2, j1 = i1, j2 = j1) {
    const i1Max = i1 + 1 > 9 ? i1 : i1 + 1;
    const i1Min = i1 - 1 < 0 ? i1 : i1 - 1;
    const j1Max = j1 + 1 > 9 ? j1 : j1 + 1;
    const j1Min = j1 - 1 < 0 ? j1 : j1 - 1;
    const i2Max = i2 + 1 > 9 ? i2 : i2 + 1;
    const i2Min = i2 - 1 < 0 ? i2 : i2 - 1;
    const j2Max = j2 + 1 > 9 ? j2 : j2 + 1;
    const j2Min = j2 - 1 < 0 ? j2 : j2 - 1;
    if (i1 < i2) {
      if (
        this.shipAt(i1Min, i2Max, j1Min, j2Min) ||
        this.shipAt(i1Min, i2Max, j1Max, j2Max) ||
        this.board[i1Min][j1] ||
        this.board[i2Max][j1]
      )
        return true;
    } else if (i1 > i2) {
      if (
        this.shipAt(i1Max, i2Min, j1Min, j2Min) ||
        this.shipAt(i1Max, i2Min, j1Max, j2Max) ||
        this.board[i1Max][j1] ||
        this.board[i2Min][j1]
      )
        return true;
    }

    if (j1 < j2) {
      if (
        this.shipAt(i1Min, i2Min, j1Min, j2Max) ||
        this.shipAt(i1Max, i2Max, j1Min, j2Max) ||
        this.board[i1][j1Min] ||
        this.board[i1][j1Max]
      )
        return true;
    } else if (j1 > j2) {
      if (
        this.shipAt(i1Min, i2Min, j1Max, j2Min) ||
        this.shipAt(i1Max, i2Max, j1Max, j2Min) ||
        this.board[i1][j1Max] ||
        this.board[i1][j1Min]
      )
        return true;
    }

    if (i1 === i2 && j1 === j2) {
      if (
        this.shipAt(i1Min, i2Max, j1Min, j2Min) ||
        this.shipAt(i1Min, i2Max, j1Max, j2Max) ||
        this.board[i1Min][j1] ||
        this.board[i1Max][j1]
      ) {
        return true;
      }
    }
    return false;
  }

  findOtherCoordinates(length, i1, j1, direction) {
    let i2 = i1;
    let j2 = j1;
    if (direction === 'bottom') i2 += length - 1;

    if (direction === 'top') i2 -= length - 1;

    if (direction === 'right') j2 += length - 1;

    if (direction === 'left') j2 -= length - 1;

    return [i2, j2];
  }

  isValidCoordinate(...coordinates) {
    for (const point of coordinates) {
      if (point < 0 || point > 9) {
        return false;
      }
    }
    return true;
  }

  receiveAttacks(i, j) {
    if (!this.isValidCoordinate(i, j)) return 'Invalid!';
    if (this.board[i][j] === 0) {
      //-1 means that position has already received missed attack
      this.board[i][j] = -1;
      return 'Missed!';
    } else if (this.board[i][j] === -1 || this.board[i][j] === 1) {
      return 'Already attacked!';
    } else {
      const shipId = this.board[i][j];
      this.sendHit(shipId);
      // 1 means we have already hit ship at that position
      this.board[i][j] = 1;
      return 'Hit ship!';
    }
  }

  sendHit(shipId) {
    const ship = this.ships.find((ship) => ship.id === shipId);
    if (ship) ship.hit();
  }

  allShipAreSunk() {
    for (const ship of this.ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  }
}
