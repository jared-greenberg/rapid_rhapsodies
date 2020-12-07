// count down
class Timer {

  constructor(){
    this.seconds = 60;
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick(){
    this.seconds--;
    if (this.seconds === -0){
      clearInterval(this.interval)
    }
  }

}

export default Timer;