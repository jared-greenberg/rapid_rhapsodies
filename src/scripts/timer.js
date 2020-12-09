import { times } from "lodash";

// count down
class Timer {

  constructor(){
    this.seconds = 60;
    this.interval = setInterval(() => this.tick(), 1000);
    this.element = document.getElementById("timer");
  }

  tick(){
    this.seconds--;
    this.element.innerHTML = this.seconds
    if (this.seconds === -0){
      clearInterval(this.interval)
    }
  }

}

export default Timer;