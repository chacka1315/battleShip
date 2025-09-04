export function fillBoard(player1, player2) {
  player1.gameboard.placeShip(1, 0, 0);
  player1.gameboard.placeShip(1, 5, 5);
  player1.gameboard.placeShip(2, 7, 0, 'right');
  player1.gameboard.placeShip(2, 2, 9, 'bottom');
  player1.gameboard.placeShip(3, 0, 3, 'bottom');
  player1.gameboard.placeShip(3, 2, 5, 'right');
  player1.gameboard.placeShip(3, 5, 9, 'bottom');
  player1.gameboard.placeShip(4, 0, 6, 'right');
  player1.gameboard.placeShip(4, 2, 0, 'bottom');
  player1.gameboard.placeShip(6, 9, 9, 'left');

  player2.gameboard.placeShip(1, 0, 0);
  player2.gameboard.placeShip(1, 5, 5);
  player2.gameboard.placeShip(2, 7, 0, 'right');
  player2.gameboard.placeShip(2, 2, 9, 'bottom');
  player2.gameboard.placeShip(3, 0, 3, 'bottom');
  player2.gameboard.placeShip(3, 2, 5, 'right');
  player2.gameboard.placeShip(3, 5, 9, 'bottom');
  player2.gameboard.placeShip(4, 0, 6, 'right');
  player2.gameboard.placeShip(4, 2, 0, 'bottom');
  player2.gameboard.placeShip(6, 9, 9, 'left');
}
