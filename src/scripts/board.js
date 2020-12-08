import Move from './move';


// holds all of the rows 
class Board {

  constructor(songLength, level, ctx) {
    this.ctx = ctx;
    this.rows = Board.initializeBoard(songLength, level, ctx);
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
      this.ctx.font = '88px sans-serif';
      this.ctx.fillStyle = "black";
      this.ctx.fillText('X', 360 - (box * 70), 475);
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