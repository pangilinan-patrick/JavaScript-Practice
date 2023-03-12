// ALL SUBMISSION CASES NOT COMPLETE YET
class Pixel {
  constructor(map) {
    this.map = map;
    this.move = "";
    this.finished = false;
    this.hasKey = false;
    this.numOfMoves = 0;
    this.x = 0;
    this.y = 0;
  }

  _inputMoves(moves) {
    this._getStart();
    this.move = moves;

    for (let i = 0; i < this.move.length; i++) {
      if (this.move[i] === "w" && !(this.y - 1 < 0)) {
        if (this.map[this.y][this.x] === 3) {
          if (this.hasKey) this.y--;
        } else if (
          this.map[this.y - 1][this.x] !== 1
          // this.map[this.y - 1][this.x] !== 3
        )
          this.y--;
      } else if (this.move[i] === "s" && !(this.y + 1 > this.map.length - 1)) {
        if (this.map[this.y][this.x] === 3) {
          if (this.hasKey) this.y++;
        } else if (
          this.map[this.y + 1][this.x] !== 1
          // this.map[this.y + 1][this.x] !== 3
        )
          this.y++;
      } else if (this.move[i] === "a" && !(this.x - 1 < 0)) {
        if (this.map[this.y][this.x] === 3) {
          if (this.hasKey) this.x--;
        } else if (
          this.map[this.y][this.x - 1] !== 1
          // this.map[this.y][this.x - 1] !== 3
        )
          this.x--;
      } else if (
        this.move[i] === "d" &&
        !(this.x + 1 > this.map[this.x].length - 1)
      ) {
        if (this.map[this.y][this.x] === 3) {
          if (this.hasKey) this.x++;
        } else if (
          this.map[this.y][this.x + 1] !== 1
          // this.map[this.y][this.x + 1] !== 3
        )
          this.x++;
      }
      this.numOfMoves = i + 1;
      console.log(`${this.move[i]} current x: ${this.x} current y: ${this.y}`);
      this._checkmap();
      if (this.map[this.y][this.x] === 5) break;
    }
  }

  _getStart() {
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        if (this.map[i][j] === 2) {
          this.y = i;
          this.x = j;
        }
      }
    }
  }

  _checkmap() {
    //check if finish or has key
    if (this.map[this.y][this.x] === 5) {
      this.finished = true;
      this._move();
    }
    if (this.map[this.y][this.x] === 4) this.hasKey = true;
  }

  _move() {
    //if finished
    if (this.map[this.y][this.x] === 5) {
      console.log("Finished at " + this.numOfMoves + " moves");
      return "Finished at " + this.numOfMoves + " moves";
    }
    //if did not reach finish line
    console.log("Stuck at x = " + [this.x] + " y = " + [this.y]);
    return "Stuck at x=" + [this.x] + " y=" + [this.y];
  }
}
const map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0 y
  [0, 0, 0, 0, 1, 5, 1, 0, 0, 0], //1
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0], //2
  [0, 0, 0, 0, 1, 0, 0, 1, 1, 1], //3
  [0, 0, 0, 0, 1, 0, 1, 1, 0, 1], //4
  [0, 0, 0, 0, 1, 0, 3, 0, 0, 4], //5
  [0, 0, 0, 0, 1, 1, 1, 1, 3, 1], //6
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 1], //7
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 1], //8
  [0, 0, 0, 0, 0, 0, 0, 1, 2, 1], //9
  //0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];
const game = new Pixel(map);
// game._inputMoves("wwwwaaawwww");
game._inputMoves("wwwwwwaaawwww");
