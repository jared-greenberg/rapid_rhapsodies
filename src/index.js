import debounce from 'lodash/debounce';
import Game from './scripts/game';
import './styles/index.scss';



const canvas = document.getElementById('game-board');
const ctx = canvas.getContext("2d");

const game = new Game(10, 3);
let y = 0;

function draw(){
  ctx.clearRect(0, 0, 500, 500)
  let z = y;
  let count = 0
  game.board.rows.forEach(row => {
    if (z > 603) {
     z -= 103;
     return
    }
    if (z < -103) return;
    row.drawRow(ctx, z - 103)
    count++;
    z -= 103;
  })
  console.log(count);
 
  y += 12.875;
  debugger
  if (y % 103 !== 0) {
    requestAnimationFrame(draw);
  }

  
}
window.draw = draw;


// ctx.beginPath();
// ctx.strokeStyle = "black";
// ctx.strokeRect(75, 0, 350, 88);
// ctx.strokeRect(75, 0, 70, 88);
// ctx.strokeRect(145, 0, 70, 88);
// ctx.strokeRect(215, 0, 70, 88);
// ctx.strokeRect(285, 0, 70, 88);
// ctx.strokeRect(355, 0, 70, 88);

// ctx.strokeRect(75, 103, 350, 88);
// ctx.strokeRect(75, 206, 350, 88);
// ctx.strokeRect(75, 309, 350, 88);
// ctx.strokeRect(75, 412, 350, 88);
// ctx.closePath();
// ctx.beginPath();
// ctx.arc(109.5, 55, 11, 0, Math.PI * 2);
// ctx.fill();
// ctx.closePath();
// ctx.beginPath();
// ctx.moveTo(120, 53.5);
// ctx.lineWidth = 2;
// ctx.lineTo(120, 24.5);
// ctx.stroke();










const makeMove = keysDown => {
  keysDown = parseInt(keysDown.join(""), 2);
  if (game.checkMove(keysDown)){
    console.log("play sound");
    console.log("load next sound");
  }
  else {
    console.log('play fail sound');
    console.log('load next sound')
  }
}

const debouncedMakeMove = debounce(makeMove, 80);

const keyElements = document.querySelectorAll('.player-key');
const keys = {'a': 0, 's': 1, 'd': 2, 'f': 3, 'g': 4}
let keysDown = [0, 0, 0, 0, 0];


document.addEventListener('keydown', (e) => {
  const idx = keys[e.key]
  if (idx === undefined || keysDown[idx] === 1) return;
  keysDown[idx] = 1;
  keyElements[idx].classList.add("selected");
  debouncedMakeMove(keysDown);
})

document.addEventListener('keyup', (e) => { 
  keysDown = Array(5).fill(0);
  keyElements[keys[e.key]].classList.remove("selected");
})





