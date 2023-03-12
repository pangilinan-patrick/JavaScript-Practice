// Unfinished
class notepad {
  constructor() {
    this.cursor = 0;
    this.str = "";
    this.result = "";
  }

  addText(text) {
    this.str +=
      this.str.substr(this.cursor, this.cursor + 1) +
      String.fromCharCode(text) +
      this.str.substr(this.cursor + 1);
    this.cursor++;
  }

  delete() {
    //codehere
  }

  moveLeft() {
    if (this.cursor >= 0) this.cursor -= 1;
  }
  moveRight() {
    if (this.cursor <= this.str.length) this.cursor += 1;
  }

  enter() {
    this.result = this.str;
  }
}

let notes = new notepad();
notes.addText(72);
notes.addText(101);
notes.addText(109);
notes.moveLeft();
notes.addText(112);
console.log(notes.str);
