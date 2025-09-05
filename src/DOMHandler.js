import { Player } from './player';
import { fillBoard } from './fillBoard';
import { renderBoard } from './boardRender';
export function DOMHandler() {
  const player = new Player('player');
  const computer = new Player();
  fillBoard(player, computer);
  renderBoard(player, computer);
}
