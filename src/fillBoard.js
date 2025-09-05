export function fillBoard(player1, player2) {
  const shipLength = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
  const directions = ['left', 'right', 'top', 'bottom'];

  player1.gameboard.placeShip(1, 0, 0);
  player1.gameboard.placeShip(1, 2, 9);
  player1.gameboard.placeShip(2, 5, 5, 'bottom');
  player1.gameboard.placeShip(2, 7, 0, 'right');
  player1.gameboard.placeShip(3, 2, 5, 'right');
  player1.gameboard.placeShip(3, 5, 9, 'bottom');
  player1.gameboard.placeShip(4, 0, 6, 'right');
  player1.gameboard.placeShip(4, 2, 0, 'bottom');
  player1.gameboard.placeShip(5, 0, 3, 'bottom');
  player1.gameboard.placeShip(6, 9, 9, 'left');

  for (const length of shipLength) {
    let dropResult;
    let tryCount = 0;

    do {
      let i = Math.floor(Math.random() * 10);
      let j = Math.floor(Math.random() * 10);
      let directionIndex = Math.floor(Math.random() * 4);
      let direction = directions[directionIndex];
      tryCount++;
      if (tryCount > 1000) break;
      console.log('drop try');

      dropResult = player2.gameboard.placeShip(length, i, j, direction);
    } while (dropResult !== 'Placed!');
  }

  // player2.gameboard.placeShip(1, 0, 0);
  // player2.gameboard.placeShip(1, 5, 5);
  // player2.gameboard.placeShip(2, 7, 0, 'right');
  // player2.gameboard.placeShip(2, 2, 9, 'bottom');
  // player2.gameboard.placeShip(3, 0, 3, 'bottom');
  // player2.gameboard.placeShip(3, 2, 5, 'right');
  // player2.gameboard.placeShip(3, 5, 9, 'bottom');
  // player2.gameboard.placeShip(4, 0, 6, 'right');
  // player2.gameboard.placeShip(4, 2, 0, 'bottom');
  // player2.gameboard.placeShip(6, 9, 9, 'left');
}
