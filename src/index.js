import debounce from 'lodash/debounce';
import Game from './scripts/game';
import './styles/index.scss';
import Songs from './scripts/songs';

//
const canvas = document.getElementById('game-board');
const ctx = canvas.getContext("2d");



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


let paused = false;

const makeMove = keysDown => {
  keysDown = parseInt(keysDown.join(""), 2);
  if (game.checkMove(keysDown)){
    if (!started){
    game.startTimer();
    started = true;
  }
    playTone();
    draw();
  }
  else {
    if (!started) return;
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
  if (paused || game.gameOver()) return;
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

const menu = document.getElementById("menu-background");
const startButton = document.getElementById("start-game");
const quit = document.getElementById("quit");
let song, level;
const audioCtx = new AudioContext();
let errorSource, noteSource;
let i = 0;
let started = false;
let y;
let game;



startButton.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.add('hidden');
  song = document.querySelector('input[name="song"]:checked').value;
  level = document.querySelector('input[name="level"]:checked').value;
  debugger
   i = 0;
  loadNextNote(Songs[song][i]);
  loadNextNote('wrong', true);  
  game = new Game(Songs[song].length, level, ctx);
  y = canvas.height - 99;
  draw();
})


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
  if (i !== game.board.length){
  loadNextNote(Songs[song][i]);
  }
}

function playError(){
  errorSource.start();
  loadNextNote('wrong', true);
}

quit.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.remove('hidden');
  game.quit();
})





