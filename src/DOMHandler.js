import { Player } from './player';
import { fillBoard } from './fillBoard';
function DOMHandler() {
  const player = new Player('player');
  const computer = new Player();
  fillBoard(player, computer);
}
