function fillBoard() {
  const shipLength = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
  const directions = ['left', 'right', 'top', 'bottom'];

  const fillComputerBoard = (computer) => {
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
        dropResult = computer.gameboard.placeShip(length, i, j, direction);
      } while (dropResult !== 'Placed!');
    }
  };

  const fillPlayerBoard = (player) => {
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
        dropResult = player.gameboard.placeShip(length, i, j, direction);
      } while (dropResult !== 'Placed!');
    }
  };
  return { fillComputerBoard, fillPlayerBoard };
}

export const generateBoard = fillBoard();
