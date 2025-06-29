let wordLength = 5;
let numGuesses = 6;

let boardState = [...Array(numGuesses)].map(elem => Array(wordLength).fill(' '));

let currentGuess = "";
let currentGuessNum = 0;

let board = document.querySelector(".board");


class Keyboard {
    constructor() {
        let keyboardDiv = document.querySelector(".keyboard");
        let keys = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U',' I', 'O', 'P'],
                          ['A', 'S', 'D', 'F', 'G', 'H', 'J',' K', 'L'],
                          ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'CLOSE']]


        for (let i = 0; i < 3; i++) {
            let keyboardRow = document.createElement("div");
            keyboardRow.setAttribute('class', 'keyboard-row');
            keyboardDiv.appendChild(keyboardRow);
        }
    }
}

let keyBoard = new Keyboard();

document.querySelector('body').addEventListener('keydown', event => {
    if ( (!['Backspace', 'Enter'].includes(event.key) && currentGuess.length >= wordLength) || currentGuessNum >= numGuesses)
        return;

    if (event.key === 'Backspace') {
        if (currentGuess.length === 0)
            return;

        currentGuess = currentGuess.slice(0, -1);
    } else if (event.key === 'Enter') {
        if (currentGuess.length !== wordLength)
            return;

        currentGuessNum++;
        currentGuess = "";
    } else if (event.key >= 'a' && event.key <= 'z'){
        currentGuess += event.key;
    }

    for (let i = 0; i < wordLength; i++)
        boardState[currentGuessNum][i] = currentGuess[i];

    renderBoard();
});

function renderBoard() {
    let rows = Array.from(board.children);

    for (let rowNum = 0; rowNum < rows.length; rowNum++) {
        let col = Array.from(rows[rowNum].children);
        for (let colNum = 0; colNum < col.length; colNum++)
        {
            col[colNum].textContent = boardState[rowNum][colNum].toUpperCase();
        }
    }
}
