export function renderBoard(player1, player2) {
  const board1 = document.querySelector('#board1');
  const board2 = document.querySelector('#board2');

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const button = document.createElement('button');
      button.dataset.id = player1.gameboard.board[i][j];
      if (player1.gameboard.board[i][j] === 0) {
        button.classList.add('board');
      } else if (player1.gameboard.board[i][j] === -1) {
        button.classList.add('missed');
      } else if (player1.gameboard.board[i][j] === 1) {
        button.classList.add('hit');
      } else {
        button.classList.add('ship');
      }
      board1.appendChild(button);
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const button = document.createElement('button');
      button.dataset.id = player2.gameboard.board[i][j];
      if (player2.gameboard.board[i][j] === 0) {
        button.classList.add('board');
      } else if (player2.gameboard.board[i][j] === -1) {
        button.classList.add('missed');
      } else if (player2.gameboard.board[i][j] === 1) {
        button.classList.add('hit');
      } else {
        button.classList.add('ship');
      }
      board2.appendChild(button);
    }
  }
}
