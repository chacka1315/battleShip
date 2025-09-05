import { Player } from './player';
import { generateBoard } from './fillBoard';
import { renderBoard } from './boardRender';
export function DOMHandler() {
  const boards = document.querySelector('.boards');
  const gameboard = document.querySelectorAll('.gameboard');
  const msg = document.querySelector('.msg');
  const startButton = document.querySelector('#start');
  const randomiseBtn = document.querySelector('#randomise');
  randomiseBtn.disabled = true;

  let player1 = new Player('Player');
  let player2 = new Player();

  let actualPlayer = player1;
  let opponent = player2;

  renderBoard(player1, player2);
  const playGame = () => {
    gameboard.forEach((board) => (board.textContent = ''));
    player1 = new Player('Player');
    player2 = new Player();
    actualPlayer = player1;
    opponent = player2;
    generateBoard.fillComputerBoard(player2);
    generateBoard.fillPlayerBoard(player1);
    renderBoard(player1, player2);
    isWinner = false;
    msg.textContent = `It's ${actualPlayer.name} turn...`;
    randomiseBtn.disabled = false;
  };

  const switchPlayer = () => {
    actualPlayer = actualPlayer.name === player1.name ? player2 : player1;
    opponent = opponent.name === player1.name ? player2 : player1;
  };

  let isWinner;
  boards.addEventListener('click', (e) => {
    randomiseBtn.disabled = true;
    const button = e.target;
    if (isWinner) return;
    if (!button.matches(`button.board-${opponent.name}`)) return;
    const buttonDataId = Number(button.dataset.id);
    if (buttonDataId !== 1 && buttonDataId !== -1) {
      const i = button.dataset.i;
      const j = button.dataset.j;
      opponent.gameboard.receiveAttacks(i, j);
      isWinner = checkWinner(opponent);
      if (isWinner) {
        msg.textContent = `The winner is ${actualPlayer.name} !`;
      } else {
        switchPlayer();
        msg.textContent = `It's ${actualPlayer.name} turn...`;
      }
      renderBoard(player1, player2);
      setTimeout(computerPlay, 1500);
    }
  });

  const checkWinner = (opponent) => {
    return opponent.gameboard.allShipAreSunk();
  };

  startButton.addEventListener('click', () => {
    playGame();
  });

  randomiseBtn.addEventListener('click', () => {
    document.querySelector('#board1').textContent = '';
    player1 = new Player('Player');
    generateBoard.fillPlayerBoard(player1);
    renderBoard(player1, player2);
  });

  const computerPlay = () => {
    if (isWinner) {
      msg.textContent = `The winner is ${actualPlayer.name} !`;
      return;
    }
    let isLegal;
    let i;
    let j;
    while (!isLegal) {
      i = Math.floor(Math.random() * 10);
      j = Math.floor(Math.random() * 10);
      isLegal = isLegalHit(i, j);
    }
    player1.gameboard.receiveAttacks(i, j);
    isWinner = checkWinner(opponent);
    switchPlayer();
    msg.textContent = `It's ${actualPlayer.name} turn...`;
    renderBoard(player1, player2);
  };

  const isLegalHit = (i, j) => {
    if (
      player1.gameboard.board[i][j] === 1 ||
      player1.gameboard.board[i][j] === -1
    ) {
      return false;
    }
    return true;
  };
}
