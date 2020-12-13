import debounce from 'lodash/debounce';
import Game from './scripts/game';
import './styles/index.scss';
import Songs from './scripts/songs';
import { SoundEffect, NotePlayer } from './scripts/soundeffect';


const canvas = document.getElementById('game-board');
const ctx = canvas.getContext("2d");


const theme = document.getElementById('theme');
const splash = document.getElementById('open-modal-background');

splash.addEventListener("click", () => {
  splash.classList.add("hidden");
  theme.play();
})

window.addEventListener('blur', (e) => {
  e.preventDefault();
  theme.pause();
})

window.addEventListener('focus', (e) => {
  e.preventDefault();
  theme.play();
})



function drawBox(){
  ctx.strokeStyle = "green";
  ctx.lineWidth = 2;
  ctx.strokeRect(1, canvas.height - 109, canvas.width-2, 103)
}

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let rowY = y;
  // TODO change this to for loop to exit early?
  game.board.rows.forEach(row => {
    // only draw the rows on the grid, can optimize with a for loop and break?
    if (rowY > -103 && rowY < canvas.height){
      (game.board.position < 1) ? row.bounceNotes(rowY) : row.drawRow(rowY, true);
    }
    rowY -= 103;
  })
  // 103 / 8 to make sure we hit the 103
  y += 12.875 

  if (!game.gameOver()) drawBox();

  if ((y - 321 - 12.875) % 103 !== 0) {
    requestAnimationFrame(draw);
  } 
 
}


let paused = false;

const makeMove = keysDown => {
  keysDown = parseInt(keysDown.join(""), 2);
  let goodMove = game.checkMove(keysDown);
  if (goodMove === true){
    notePlayer.playSound();
    draw();  
  }
  else if (goodMove === false) {
    errorPlayer.playSound();
    paused = true;
    setTimeout( () => {
      paused = false
      if (!game.gameOver()) drawBox();
     }, 2500)
  }
}

const debouncedMakeMove = debounce(makeMove, 40);

const keyElements = document.querySelectorAll('.player-key');
const keys = {'a': 0, 's': 1, 'd': 2, 'f': 3, 'g': 4}
let keysDown = [0, 0, 0, 0, 0];


document.addEventListener('keydown', (e) => {
  // don't do anything on error delay or game over
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



let song, level;
const audioCtx = new AudioContext();
let notePlayer, errorPlayer;


let y;
let game;

const menuModal = document.getElementById("menu-background");
const startGame = document.getElementById("play-button");
const exitGame = document.getElementById("quit");





startGame.addEventListener('click', (e) => {
  e.preventDefault();
  menuModal.classList.add('hidden');
  song = document.querySelector('input[name="song"]:checked').value;
  level = document.querySelector('input[name="level"]:checked').value;
 
  notePlayer = new NotePlayer(audioCtx, song);
  errorPlayer = new SoundEffect(audioCtx, 'wrong');
  game = new Game(Songs[song].length, level, ctx);
  y = canvas.height - 99;
  draw();
  theme.pause();
})





exitGame.addEventListener('click', (e) => {
  e.preventDefault();
  menuModal.classList.remove('hidden');
  game.quit();
  theme.currentTime = 0;  
  theme.play();
})







