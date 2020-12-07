import Board from './board';
import Timer from './timer';

class Game {
  
  constructor(songLength, level) {
    this.board = new Board(songLength, level)
  }

  
  startTimer(){
    this.timer = new Timer();
  }

  go(){
    this.board.currentMove();
  }


  checkMove(playerMove){
    if ((this.board.currentMove() ^ playerMove) === 0){
      this.board.nextMove();
      return true;
    }
    else {
      console.log("wrong")
      return false;
    }
  }

  // game ends when there are no more moves or the timer runs out.
  gameOver() {
    !this.board.currentMove || this.timer.seconds === 0
  }

}

export default Game;
