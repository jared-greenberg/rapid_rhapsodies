import debounce from 'lodash/debounce';
import Game from './scripts/game';
import './styles/index.scss';
import * as Songs from './scripts/songs';

//
const canvas = document.getElementById('game-board');
const ctx = canvas.getContext("2d");

const audioCtx = new AudioContext();
let errorSource, noteSource;
let i = 0;
loadNextNote(Songs.furElise[i]);
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
  i++;
  loadNextNote(Songs.furElise[i]);
}

function playError(){
  errorSource.start();
  loadNextNote('wrong', true);
}

const game = new Game(Songs.furElise.length, 1, ctx);
let y = canvas.height - 99;

draw();

function draw(){
  ctx.clearRect(70, 0, canvas.width-70 , canvas.height);
  let rowY = y;
  // TODO change this to for loop to exit early?



  game.board.rows.forEach(row => {
    // only draw the rows on the grid, can optimize with a for loop and break?
    if (rowY > -103 && rowY < canvas.height){
      row.drawRow(rowY);
    }
    rowY -= 103;
  })
  
  // 103 / 8 to make sure we hit the 103
  y += 12.875 


  if ((y - 321 - 12.875) % 103 !== 0) {
    requestAnimationFrame(draw);
  }
 
}

function drawArrows(){
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(72, 59);
  ctx.lineTo(62, 49);
  ctx.moveTo(72, 59);
  ctx.lineTo(62, 69);



  ctx.restore();

  requestAnimationFrame(drawArrows)
}

let paused = false;

const makeMove = keysDown => {
  keysDown = parseInt(keysDown.join(""), 2);
  if (game.checkMove(keysDown)){
    playTone();
    draw();
  }
  else {
    playError();
    paused = true;
    setTimeout( () => paused = false, 3000)
  }
}

const debouncedMakeMove = debounce(makeMove, 50);

const keyElements = document.querySelectorAll('.player-key');
const keys = {'a': 0, 's': 1, 'd': 2, 'f': 3, 'g': 4}
let keysDown = [0, 0, 0, 0, 0];


document.addEventListener('keydown', (e) => {
  if (paused) return;
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





