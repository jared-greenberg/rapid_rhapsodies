import Board from './board';

const canvasHeight = 420; 
const canvasWidth = 500;

class Game {
  
  constructor(songLength, level, ctx) {
    this.board = new Board(songLength, level, ctx)
    this.score = 0;
    this.seconds = 30;
    this.scoreElement = document.getElementById("score");
    this.timerElement = document.getElementById("timer");
    this.overWarning = document.querySelector('.game-over-warning');
    this.tryAgain = document.getElementById('try-again');
    this.y = canvasHeight - 99;
    this.showScore();
    this.ctx = ctx;
    this.draw();
  }


  // keeps track of time
  startTimer(){
    this.showTime();
  
     this.interval = setInterval(() => {
      this.seconds--;
      if (this.seconds === -1) {
        this.showTimesUp();
        clearInterval(this.interval);
      } 
      else {
        this.showTime();
      }
    }, 1000);

  }

  showTimesUp(){
        this.timerElement.style.color = "red";
        this.timerElement.classList.add("flashing");
        this.showTime("Time's Up!");
        this.overWarning.classList.toggle("hidden");
        this.tryAgain.classList.toggle("hidden");
        // to remove the green box
        this.board.clearCurrentRow();
        this.board.rows[this.board.position].drawRow(420-99, true); 
  }

  showTime(text){
    let display = text ? text : this.seconds;
    this.timerElement.innerHTML = display;
  }

  showScore(){
    this.scoreElement.innerHTML = `${this.score} / ${this.board.length}`
  }
  

  checkMove(playerMove){
    const xOr = this.board.currentMoveValue() ^ playerMove;
    
    if (xOr === 0){

      if (!this.interval) {this.startTimer()};

      this.board.nextMove();
      this.draw();
      this.score++;
      this.showScore();

      if (this.score === this.board.length) {
        clearInterval(this.interval)
        this.showTime("Perfect Score!");
        this.tryAgain.classList.toggle("hidden");
      }

      return true;
    }

    else {
      if (!this.interval) return;
      this.board.flashErrors(xOr);
      return false;
    }
  }

  drawBox(){
    this.ctx.strokeStyle = "green";
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(1, canvasHeight - 109, canvasWidth-2, 103)
  }

  draw(){
    this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    let rowTop = this.y;
    let y = this.y;
    // TODO change this to for loop to exit early?
    this.board.rows.forEach(row => {
      // only draw the rows on the grid, can optimize with a for loop and break?
      if (rowTop > -103 && rowTop < canvasHeight){
        (!this.interval) ? row.bounceNotes(rowTop) : row.drawRow(rowTop, true);
      }
      rowTop -= 103;
    })
    // 103 / 8 to make sure we hit the 103
    this.y += 12.875 

    if (!this.gameOver()) this.drawBox();

    if ((this.y - 321 - 12.875) % 103 !== 0) {
      requestAnimationFrame(this.draw.bind(this));
    } 
  
  }

  quit(){
    // stop timer
    clearInterval(this.interval);
    this.timerElement.style.color = "white";
    this.timerElement.innerHTML = 30;
    this.timerElement.classList.remove("flashing");
    this.seconds = -1;
    if (!this.overWarning.classList.contains("hidden")){
      this.overWarning.classList.toggle("hidden");
    }
    if (!this.tryAgain.classList.contains("hidden")){
      this.tryAgain.classList.toggle("hidden");
    }
    // stop bouncing if user quits before starting
    this.board.rows.forEach(row => clearInterval(row.bouncing))
  }

  gameOver() {
    return this.seconds === -1 || this.score === this.board.length
  }


}

export default Game;
