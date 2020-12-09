import Board from './board';
import Timer from './timer';

class Game {
  
  constructor(songLength, level, ctx) {
    this.board = new Board(songLength, level, ctx)
    this.ctx = ctx;
  }

  startTimer(){
    this.timer = new Timer();
  }

  checkMove(playerMove){
    const xOr = this.board.currentMove() ^ playerMove;
    if (xOr === 0){
      this.board.nextMove();
      return true;
    }
    else {
      this.flashErrors(xOr);
      return false;
    }
  }

  flashErrors(xOr){
    let count = 0;
    this.board.drawErrors(xOr)
    const flash = setInterval(() => {
      if (count === 5){
        clearInterval(flash);
      }
      else if (count % 2 !== 0){
        this.board.drawErrors(xOr)
      }
      else {
        this.board.clearErrors();
        this.board.rows[this.board.position].drawRow(420 - 99);
      }
      count++
    }, 500);
  }

  // game ends when there are no more moves or the timer runs out.
  gameOver() {
    !this.board.currentMove || this.timer.seconds === 0
  }

 

}

export default Game;
