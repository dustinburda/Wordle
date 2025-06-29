let wordLength = 5;
let numGuesses = 6;
let boardState = [...Array(numGuesses)].map(elem => Array(wordLength).fill(' '));

let currentGuessIndex = 0;
let currentGuessNum = 0;

let board = document.querySelector(".board");


class Board
{
    #boardState;
    #board;
    constructor() {
        this.#boardState = [...Array(numGuesses)].map(elem => Array(wordLength).fill(' '));
        this.#board = document.querySelector(".board");
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

document.querySelector('body').addEventListener('keydown', event => {
    if ( (!['Backspace', 'Enter'].includes(event.key) && currentGuessIndex >= wordLength) || currentGuessNum >= numGuesses)
        return;

    if (event.key === 'Backspace') {
        if (currentGuessIndex <= 0)
            return;

        currentGuessIndex--;
        boardState[currentGuessNum][currentGuessIndex] = ' ';
    } else if (event.key === 'Enter') {
        if (currentGuessIndex !== wordLength)
            return;

        currentGuessNum++;
        currentGuessIndex = 0;
    } else if (event.key >= 'a' && event.key <= 'z'){
        boardState[currentGuessNum][currentGuessIndex] = event.key;
        currentGuessIndex++;
    }

    console.log(currentGuessIndex);

    renderBoard();
});

function renderBoard() {
    let rows = Array.from(board.children);

    for (let rowNum = 0; rowNum < rows.length; rowNum++) {
        let col = Array.from(rows[rowNum].children);
        for (let colNum = 0; colNum < col.length; colNum++)
        {
            col[colNum].textContent = boardState[rowNum][colNum];
        }
    }
}
