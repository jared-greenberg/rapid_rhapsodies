import Row from './row';


// holds all of the rows 
class Board {

  constructor(songLength, level, ctx) {
    this.ctx = ctx;
    this.rows = Board.initializeBoard(songLength, level, ctx);
    this.length = this.rows.length;
    this.position = 0;
    // graphic for missed notes
    this.angry = document.getElementById("angry");
  }

  static initializeBoard(songLength, level, ctx) {
    const rows = [];
    for (let i = 0; i < songLength; i++){
      rows.push(new Row(level, ctx))
    }
    return rows;
  }

  nextMove(){
    this.position++;
  }


  currentMoveValue(){
    return parseInt(this.rows[this.position].arr.join(""), 2);
  }


  drawErrors(xOr){
    for (let box = 0; box < 5; box++){
      
      if ((xOr & (2 ** box)) === (2 ** box)) {
        
        if ((this.currentMoveValue() & (2 **  box)) === 0){
          this.ctx.fillStyle = "red";
          this.ctx.fillRect(357 - (70 * box), 420 - 98, 67, 86);
        }
        else{
          this.ctx.fillStyle = "white";
          this.ctx.fillRect(357 - (70 * box), 420 - 98, 67, 86);
          this.ctx.drawImage(this.angry, 0, 0, 50, 50, 402 - (70 * box), 315, 50, 50)
          this.rows[this.position].drawMusicNotes(321);
        }
        
      }
    }
  }


   flashErrors(xOr){
    let count = 0;
    this.clearCurrentRow();
    this.rows[this.position].drawRow(420 - 99, true);
    this.drawErrors(xOr)
    const flash = setInterval(() => {
      if (count === 5){
        clearInterval(flash);
      }
      else if (count % 2 !== 0){
        this.drawErrors(xOr)
      }
      else {
        this.clearCurrentRow();
        this.rows[this.position].drawRow(420 - 99, true);
      }
      count++
    }, 500);
  }

  clearCurrentRow(){
    this.ctx.clearRect(0, 310, 500, 109);
  }


}

export default Board;