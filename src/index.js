// import "./styles/index.scss";
import debounce from 'lodash/debounce';
import Game from './scripts/game';




const game = new Game(10, 3);

const makeMove = keysDown => {
  keysDown = parseInt(keysDown.join(""), 2);
  if (game.checkMove(keysDown)){
    console.log("play sound");
    console.log("load next sound");
    game.go();
  }
  else {
    console.log('play fail sound');
    console.log('load next sound')
  }
}

const debouncedMakeMove = debounce(makeMove, 80);

const keys = {'a': 0, 's': 1, 'd': 2, 'f': 3, 'g': 4}
let keysDown = [0, 0, 0, 0, 0];


document.addEventListener('keydown', (e) => {
  if (keys[e.key] === undefined || keysDown[keys[e.key]] === 1) return;
  keysDown[keys[e.key]] = 1;
  debouncedMakeMove(keysDown)
})

document.addEventListener('keyup', () => { 
  keysDown = Array(5).fill(0);
})




