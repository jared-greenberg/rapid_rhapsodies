import './styles/index.scss';
import debounce from 'lodash/debounce';
import Game from './scripts/game';
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


const menuModal = document.getElementById("menu-background");
const startGame = document.getElementById("play-button");
const exitGame = document.getElementById("quit");
let songTitle, level;
const audioCtx = new AudioContext();
let notePlayer, errorPlayer;
let game;


startGame.addEventListener('click', (e) => {
  e.preventDefault();
  menuModal.classList.add('hidden');
  songTitle = document.querySelector('input[name="song"]:checked').value;
  level = document.querySelector('input[name="level"]:checked').value;
  notePlayer = new NotePlayer(audioCtx, songTitle);
  errorPlayer = new SoundEffect(audioCtx, 'wrong');
  game = new Game(Songs[songTitle].length, level, ctx);
  theme.pause();
  initializeKeyListeners();
})


exitGame.addEventListener('click', (e) => {
  e.preventDefault();
  menuModal.classList.remove('hidden');
  game.quit();
  theme.currentTime = 0;  
  theme.play();
})


let paused = false;

const makeMove = keysDown => {
  keysDown = parseInt(keysDown.join(""), 2);
  let goodMove = game.checkMove(keysDown);
  if (goodMove === true){
    notePlayer.playSound(); 
  }
  else if (goodMove === false) {
    errorPlayer.playSound();
    paused = true;
    setTimeout( () => {
      paused = false
      if (!game.gameOver()) game.drawBox();
     }, 2500)
  }
}

const debouncedMakeMove = debounce(makeMove, 40);


const keyElements = document.querySelectorAll('.player-key');
const keys = {'a': 0, 's': 1, 'd': 2, 'f': 3, 'g': 4}
let keysDown = [0, 0, 0, 0, 0];

const initializeKeyListeners = () => {
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
    if (keys[e.key] !== undefined) {
      keyElements[keys[e.key]].classList.remove("selected");
    }
  })
}







