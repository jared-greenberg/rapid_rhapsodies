import Board from './board';

class Game {
  
  constructor(songLength, level, ctx) {
    this.board = new Board(songLength, level, ctx)
    this.score = 0;
    this.seconds = 59;
    this.scoreElement = document.getElementById("score");
  }


  // keeps track of time
  startTimer(){
    const timerElement = document.getElementById("timer");
    timerElement.innerHTML = this.seconds;
  
    const interval = setInterval(() => {
      this.seconds--;
      if (this.seconds === -1) {
        timerElement.style.color = "red";
        timerElement.innerHTML = "Times Up!";
        clearInterval(interval);
      } else {
        timerElement.innerHTML = this.seconds;
      }
    }, 1000);

  }
  

  checkMove(playerMove){
    const xOr = this.board.currentMove() ^ playerMove;
    if (xOr === 0){
      this.board.nextMove();
      this.score++;
      this.scoreElement.innerHTML = this.score;
      return true;
    }
    else {
      this.flashErrors(xOr);
      return false;
    }
  }

  // organizes errors flashing
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
    return this.board.position === this.board.length || this.seconds === -1
  }

 

}

export default Game;
