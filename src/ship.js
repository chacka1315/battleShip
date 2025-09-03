export class Ship {
  constructor(length) {
    this.length = length;
    this.hitTimes = 0;
    this.id = crypto.randomUUID();
  }

  hit() {
    this.hitTimes++;
  }

  isSunk() {
    return this.hitTimes >= this.length;
  }
}
