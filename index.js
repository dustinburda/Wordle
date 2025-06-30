import Board from './Board.js';
import Keyboard from './Keyboard.js';

let keyBoard = new Keyboard();
let board = new Board();

document.querySelector('body').addEventListener('keydown', event => {
    if (event.key === 'Backspace') {
        board.deleteCurrentCharacter();
    } else if (event.key === 'Enter') {
        board.setCurrentGuess();
    } else if (event.key >= 'a' && event.key <= 'z'){
        board.setCurrentCharacter(event.key);
    }
});
