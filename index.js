import Board from './Board.js';
import Keyboard from './Keyboard.js';
import {words} from "./Words.js";

let currentWord = words[Math.floor(Math.random() * words.length)];

let board = new Board(currentWord);
let keyBoard = new Keyboard(board);

window.onload = event => {
    document.querySelector('body').addEventListener('keydown', event => {
        if (event.key === 'Backspace') {
            board.deleteCurrentCharacter();
        } else if (event.key === 'Enter') {
            board.setCurrentGuess();
        } else if (event.key >= 'a' && event.key <= 'z'){
            board.setCurrentCharacter(event.key);
        }
    });
};

