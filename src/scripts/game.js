import Board from './board';

class Game {
  
  constructor(songLength, level, ctx) {
    this.board = new Board(songLength, level, ctx)
    this.score = 0;
    this.seconds = 29;
    this.scoreElement = document.getElementById("score");
    this.showScore();
    this.timerElement = document.getElementById("timer");
  }


  // keeps track of time
  startTimer(){
    this.showTime();
  
     this.interval = setInterval(() => {
      this.seconds--;
      if (this.seconds === -1) {
        this.timerElement.style.color = "red";
        this.timerElement.classList.add("flashing");
        this.board.clearErrors();
        this.board.rows[this.board.position].drawRow(420-99);
        this.showTime("Time's Up!");
        clearInterval(this.interval);
      } else {
        this.showTime();
      }
    }, 1000);

  }

  showTime(text){
    let display = text ? text : this.seconds;
    this.timerElement.innerHTML = display;
  }

  showScore(){
    this.scoreElement.innerHTML = `${this.score} / ${this.board.length}`
  }
  

  checkMove(playerMove){
    const xOr = this.board.currentMove() ^ playerMove;
    if (xOr === 0){
      this.board.nextMove();
      this.score++;
      this.showScore();
      if (this.score === this.board.length) {
        clearInterval(this.interval)
        this.showTime("Perfect Score!");
      }
      return true;
    }
    else {
      return false;
    }
  }

  // organizes errors flashing
  flashErrors(xOr){
    let count = 0;
    this.board.clearErrors();
    this.board.rows[this.board.position].drawRow(420 - 99);
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
        this.board.rows[this.board.position].drawRow(420 - 99, true);
      }
      count++
    }, 500);
  }

  quit(){
    clearInterval(this.interval);
    this.timerElement.style.color = "white";
    this.timerElement.innerHTML = 30;
    this.timerElement.classList.remove("flashing");
    this.scoreElement.innerHTML = 0;
    this.seconds = -1;
    this.board.rows.forEach (row => clearInterval(row.bouncing))
    
  }

  // game ends when there are no more moves or the timer runs out.
  gameOver() {
    return this.board.position === this.board.length || this.seconds === -1 || this.score === this.board.length
  }


}

export default Game;
