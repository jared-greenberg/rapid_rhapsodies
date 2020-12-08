import debounce from 'lodash/debounce';
import Game from './scripts/game';
import './styles/index.scss';



const canvas = document.getElementById('game-board');
const ctx = canvas.getContext("2d");

const game = new Game(10, 3);
let y = 397;

function draw(){
  ctx.clearRect(0, 0, 500, 500)
  let z = y;
  game.board.rows.forEach(row => {
    // only draw the rows on the grid
    if (z > -103 && z < 603){
      row.drawRow(ctx, z)
    }
    z -= 103
  })
  
  // 103 / 8 to make sure we hit the 103
  y += 12.875;

  
  if ((y - 397 - 12.875) % 103 !== 0) {
    requestAnimationFrame(draw);
  }

  
}




const makeMove = keysDown => {
  draw();
  // keysDown = parseInt(keysDown.join(""), 2);
  // if (game.checkMove(keysDown)){
  // draw();
  //   console.log("play sound");
  //   console.log("load next sound");
  // }
  // else {
  //   console.log('play fail sound');
  //   console.log('load next sound')
  // }
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





