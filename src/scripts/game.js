import Board from './board';
import Timer from './timer';

class Game {
  
  constructor(songLength, level) {
    this.board = new Board(songLength, level)
  }

  
  startTimer(){
    this.timer = new Timer();
  }

  checkMove(playerMove, ctx){
    const xOr = this.board.currentMove() ^ playerMove;
    if (xOr === 0){
      this.board.nextMove();
      return true;
    }
    else {
      this.flashErrors(xOr, ctx);
      return false;
    }
  }

  flashErrors(xOr, ctx){
    this.board.drawErrors(xOr, ctx);
    setTimeout(()=>this.board.clearErrors(ctx), 1000)
  }

  // game ends when there are no more moves or the timer runs out.
  gameOver() {
    !this.board.currentMove || this.timer.seconds === 0
  }

}

export default Game;
