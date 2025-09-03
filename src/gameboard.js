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

  placeShip(length, i1, j1, direction) {
    if (!this.isValidCoordinate(i1, j1)) return 'Invalid!';
    if (length < 1) return 'Invalid!';

    const ship = new Ship(length);
    if (length === 1) {
      //Fill that board position with ship length
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
    if (!this.isValidCoordinate(i2, j2)) {
      return 'Invalid!';
    }
    if (i1 === i2) {
      for (let j = j1; j < j2; j++) {
        this.board[i1][j] = ship.id;
      }
    } else {
      for (let i = i1; i < i2; i++) {
        this.board[i][j1] = ship.id;
      }
    }
    this.ships.push(ship);
    return 'Placed!';
  }

  findOtherCoordinates(length, i1, j1, direction) {
    let i2 = i1;
    let j2 = j1;
    if (direction === 'bottom') {
      j2 += length - 1;
    } else if (direction === 'top') {
      j2 -= length - 1;
    } else if (direction === 'right') {
      i2 += length - 1;
    } else if (direction === 'left') {
      i2 -= length - 1;
    }
    return [i2, j2];
  }

  isValidCoordinate(...coordinates) {
    let isValid = true;
    for (const point of coordinates) {
      if (point < 0 || point > 9) {
        isValid = false;
        return;
      }
      return isValid;
    }
  }

  // isNoAdjacentShip(i1, j1, i2, j2){
  //   const noAdjacent = true;
  //   for (let i = i1; i < i2; i++) {
  //     for (let j = j1; j < j2; j++) {
  //       if(this.board[i+1][j-1])

  //     }

  //   }
  //   if (!this.board[i1 + 1] || !this.board[i1 - 1] || !this.board[i2 + 1]) {
  //     return;
  //   }
  // }
}
