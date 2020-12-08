import debounce from 'lodash/debounce';
import Game from './scripts/game';
import './styles/index.scss';
import * as Songs from './scripts/songs';


const canvas = document.getElementById('game-board');
const ctx = canvas.getContext("2d");
const audioCtx = new AudioContext();
let errorSource, noteSource;
loadNextNote(Songs.odeToJoy[0]);
loadNextNote('wrong', true);

function loadNextNote(str, error){
  let source = audioCtx.createBufferSource();
  fetch(`./src/assets/notes/${str}.mp3`)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer))
    .then(buffer => {
      source.buffer = buffer;
      source.connect(audioCtx.destination);
      error ? errorSource = source : noteSource = source;
    } )
}


function playTone(){
  noteSource.start();
  loadNextNote(Songs.odeToJoy[2]);
}

function playError(){
  errorSource.start();
  loadNextNote('wrong', true);
}

const game = new Game(10, 3);
let y = 397;
let init = true;



function draw(){
  ctx.clearRect(0, 0, 500, 500)
  let z = y;
  game.board.rows.forEach(row => {
    // only draw the rows on the grid, can optimize with a for loop and break?
    if (z > -103 && z < 603){
      row.drawRow(ctx, z);
    }
    z -= 103;
  })
  
  // 103 / 8 to make sure we hit the 103
  if (init) { init = false }
  else {y += 12.875};

  if ((y - 397 - 12.875) % 103 !== 0) {
    requestAnimationFrame(draw);
  }

  
}


const makeMove = keysDown => {
  draw();
  playTone();
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





