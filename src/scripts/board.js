import Move from './move';


// holds all of the rows 
class Board {

  constructor(songLength, level, ctx) {
    this.ctx = ctx;
    this.rows = Board.initializeBoard(songLength, level, ctx);
    this.length = this.rows.length;
    this.position = 0;
  }

  static initializeBoard(songLength, level, ctx) {
    const rows = [];
    for (let i = 0; i < songLength; i++){
      rows.push(new Move(level, ctx))
    }
    return rows;
  }

  currentMove(){
    return parseInt(this.rows[this.position].row.join(""), 2);
  }

  drawErrors(xOr){
  
  
  for (let box = 0; box < 5; box++){
    
    if ((xOr & (2 ** box)) === (2 ** box)) {
      
      if ((this.currentMove() & (2 **  box)) === 0){
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(357 - (70 * box), 420 - 98, 67, 86);
      }
      else{
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(357 - (70 * box), 420 - 98, 67, 86);
        this.rows[this.position].drawMusicNotes(320);
      }
      
    }
  }
  }
  
  clearErrors(){
    this.ctx.clearRect(70, 395, 500 - 70, 500 - 395 )
  }

  nextMove(){
    this.position++;
  }

}

export default Board;