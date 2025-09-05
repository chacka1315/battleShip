export function renderBoard(player1, player2) {
  const board1 = document.querySelector('#board1');
  const board2 = document.querySelector('#board2');
  board1.textContent = '';
  board2.textContent = '';

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const button = document.createElement('button');
      button.classList.add(`board-${player1.name}`);
      button.dataset.i = i;
      button.dataset.j = j;
      button.dataset.id = player1.gameboard.board[i][j];
      if (player1.gameboard.board[i][j] === 0) {
        button.classList.add('board');
      } else if (player1.gameboard.board[i][j] === -1) {
        button.classList.add('missed');
        button.desabled = true;
      } else if (player1.gameboard.board[i][j] === 1) {
        button.classList.add('hit');
        button.desabled = true;
      } else {
        button.classList.add('ship');
      }
      board1.appendChild(button);
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const button = document.createElement('button');
      button.classList.add(`board-${player2.name}`);
      button.dataset.i = i;
      button.dataset.j = j;
      button.dataset.id = player2.gameboard.board[i][j];
      if (player2.gameboard.board[i][j] === 0) {
        button.classList.add('board');
      } else if (player2.gameboard.board[i][j] === -1) {
        button.classList.add('missed');
        button.desabled = true;
      } else if (player2.gameboard.board[i][j] === 1) {
        button.classList.add('hit');
        button.desabled = true;
      } else {
        button.classList.add('ship');
      }

      board2.appendChild(button);
    }
  }
}
