import Board from './Board.js';
import Keyboard from './Keyboard.js';

let board = new Board();
let keyBoard = new Keyboard(board);

document.querySelector('body').addEventListener('keydown', event => {
    if (event.key === 'Backspace') {
        board.deleteCurrentCharacter();
    } else if (event.key === 'Enter') {
        board.setCurrentGuess();
    } else if (event.key >= 'a' && event.key <= 'z'){
        board.setCurrentCharacter(event.key);
    }
});
