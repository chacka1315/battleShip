import { Player } from './player';
import { fillBoard } from './fillBoard';
import { renderBoard } from './boardRender';
export function DOMHandler() {
  const gameboard = document.querySelector('.boards');
  const msg = document.querySelector('.msg');
  const startButton = document.querySelector('#start');

  const player1 = new Player('Siakad');
  const player2 = new Player();
  fillBoard(player1, player2);
  renderBoard(player1, player2);

  let actualPlayer = player1;
  let opponent = player2;

  const switchPlayer = () => {
    actualPlayer = actualPlayer.name === player1.name ? player2 : player1;
    opponent = opponent.name === player1.name ? player2 : player1;
  };

  msg.textContent = `It's ${actualPlayer.name} turn...`;

  let isWinner;
  gameboard.addEventListener('click', (e) => {
    const button = e.target;
    console.log(button);
    console.log(opponent.name);
    console.log(actualPlayer.name);
    if (isWinner) return;
    if (!button.matches(`button.board-${opponent.name}`)) return;
    if (button.dataset.id !== 1 && button.dataset.id !== -1) {
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
    }
  });

  const checkWinner = (opponent) => {
    return opponent.gameboard.allShipAreSunk();
  };

  startButton.addEventListener('click', () => {
    DOMHandler();
  });
}
