const WORD_LENGTH = 5;
const NUM_GUESSES = 6;

class Board
{
    #boardState;
    #board;
    #currentGuessNum;
    #currentGuessIndex;
    constructor() {
        this.#boardState = [...Array(NUM_GUESSES)].map(elem => Array(WORD_LENGTH).fill(' '));
        this.#board = document.querySelector(".board");
        this.#currentGuessNum = 0;
        this.#currentGuessIndex = 0;
    }

    setCurrentCharacter(character) {
        if (this.#currentGuessIndex === WORD_LENGTH || this.#currentGuessNum >= NUM_GUESSES)
            return;

        this.#boardState[this.#currentGuessNum][this.#currentGuessIndex] = character;
        this.#currentGuessIndex++;

        this.renderBoard();
    }

    deleteCurrentCharacter() {
        if (this.#currentGuessIndex <= 0)
            return;

        this.#currentGuessIndex--;
        this.#boardState[this.#currentGuessNum][this.#currentGuessIndex] = ' ';

        this.renderBoard();
    }

    setCurrentGuess() {
        if (this.#currentGuessNum >= NUM_GUESSES || this.#currentGuessIndex !== WORD_LENGTH)
            return;

        this.#currentGuessNum++;
        this.#currentGuessIndex = 0;

        this.renderBoard();
    }

    renderBoard() {
        let rows = Array.from(this.#board.children);

        for (let rowNum = 0; rowNum < rows.length; rowNum++) {
            let col = Array.from(rows[rowNum].children);
            for (let colNum = 0; colNum < col.length; colNum++)
            {
                col[colNum].textContent = this.#boardState[rowNum][colNum];
            }
        }
    }
}

class Keyboard {
    constructor() {
        let keyboardDiv = document.querySelector(".keyboard");
        let keys = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U',' I', 'O', 'P'],
                          ['A', 'S', 'D', 'F', 'G', 'H', 'J',' K', 'L'],
                          ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE']]


        for (let row = 0; row < 3; row++) {
            let keyboardRow = document.createElement("div");
            keyboardRow.setAttribute('class', 'keyboard-row');

            for (let key = 0; key < keys[row].length; key++) {
                let keyboardKeyDiv = document.createElement("div");
                keyboardKeyDiv.classList.add('keyboard-key');

                if ( (key === 0 || key === keys[row].length - 1) && row === 2) {
                    keyboardKeyDiv.classList.add('extended');
                }
                keyboardKeyDiv.textContent = keys[row][key];

                keyboardRow.appendChild(keyboardKeyDiv);
            }

            keyboardDiv.appendChild(keyboardRow);
        }
    }
}

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
