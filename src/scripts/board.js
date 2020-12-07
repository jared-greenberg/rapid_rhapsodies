import Move from './move';


// holds all of the rows 
class Board {

  constructor(songLength, level) {
    this.rows = Board.initializeBoard(songLength, level);
    this.position = 0;
  }

  static initializeBoard(songLength, level) {
    const rows = [];
    for (let i = 0; i < songLength; i++){
      let a  = new Move(level)
      rows.push(a.row)
    }
    return rows;
  }

  currentMove(){
    console.log(this.rows[this.position])
    return parseInt(this.rows[this.position].join(""), 2);
  }

  nextMove(){
    this.position++;
  }

  drawRows(){

  }


}

export default Board;