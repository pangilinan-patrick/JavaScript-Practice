// Sample cases not met
class notepad {
  constructor() {
    this.cursor = 0;
    this.str = "";
    this.result = "";
  }

  addText(text) {
    if (isNaN(text) || text < 0 || text > 127) return null;
    if (this.str.length === this.cursor) this.str += String.fromCharCode(text);
    else if (this.cursor < this.str.length && this.str.length > 0) {
      this.str =
        this.str.substring(0, this.cursor) +
        String.fromCharCode(text) +
        this.str.substring(this.cursor);
    }
    this.cursor++;
    console.log(this.str, "cur:", this.cursor);
  }

  delete() {
    if (this.cursor > 0) {
      this.str = this.str.substring(0, this.cursor - 1);
      this.cursor--;
      console.log("Deleted");
      return "Deleted";
    } else {
      console.log("Delete error");
      return "Delete error";
    }
  }

  moveLeft() {
    if (this.cursor > 0) this.cursor -= 1;
    console.log("moved left", "cur:", this.cursor);
  }

  moveRight() {
    if (this.cursor <= this.str.length) this.cursor += 1;
    console.log("moved right", "cur:", this.cursor);
  }

  enter() {
    this.result = this.str;
    console.log(this.result);
    return this.result;
  }
}

let notes = new notepad();

notes.addText(72);
notes.addText(NaN);
// notes.moveLeft();
// notes.moveLeft();
// notes.delete();
notes.addText(109);
notes.addText(112);
notes.enter();
