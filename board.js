const WORD_LENGTH = 5;
const NUM_GUESSES = 6;

import {words} from './Words.js';

class Board
{
    #boardState;
    #board;
    #currentGuessNum;
    #currentGuessIndex;
    #currentWord;
    constructor(currentWord) {
        this.#board = document.querySelector(".board");
        this.#currentGuessNum = 0;
        this.#currentGuessIndex = 0;
        this.#currentWord = currentWord;
        console.log(currentWord);

        let board = document.querySelector('.board');

        for (let row = 0; row < NUM_GUESSES; row++) {
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            for(let j = 0; j < WORD_LENGTH; j++) {
                let squareDiv = document.createElement('div');
                squareDiv.classList.add('square');
                rowDiv.appendChild(squareDiv);

            }

            board.appendChild(rowDiv);
        }

    }

    setCurrentCharacter(character) {
        if (this.#currentGuessIndex === WORD_LENGTH || this.#currentGuessNum >= NUM_GUESSES)
            return;

        let cell = this.#getCell(this.#currentGuessNum, this.#currentGuessIndex);
        cell.textContent = character;
        this.#currentGuessIndex++;

        cell.classList.add('set-box');
        cell.classList.add('set-animation');

        window.setTimeout(() => {cell.classList.remove('set-animation')}, 100);
    }

    deleteCurrentCharacter() {
        if (this.#currentGuessIndex <= 0)
            return;

        this.#currentGuessIndex--;
        let cell = this.#getCell(this.#currentGuessNum, this.#currentGuessIndex);
        cell.textContent = ' ';

        cell.classList.remove('set-box');
    }

    setCurrentGuess() {
        if (this.#currentGuessNum >= NUM_GUESSES)
            return;

        let currentGuess = this.#getCurrentGuess()
        let cellsInCurrentRow = this.#getCellsInCurrentRow();

        if (this.#currentGuessIndex !== WORD_LENGTH || !words.includes(currentGuess)) {
            for (let cell of cellsInCurrentRow) {
                cell.classList.add('invalid-guess');

                window.setTimeout(() => {
                    cell.classList.remove('invalid-guess');
                }, 1000);
            }

            return;
        }

        debugger
        for (let index = 0; index < WORD_LENGTH; index++) {
            let currentCell = cellsInCurrentRow[index];
            let currentCorrectCharacter = this.#currentWord[index];

            if (!this.#currentWord.includes(currentCell.textContent))
                currentCell.style.backgroundColor = "gray";
            else if (this.#currentWord.includes(currentCell.textContent) && currentCell.textContent !== currentCorrectCharacter)
                currentCell.style.backgroundColor = "yellow";
            else if (currentCell.textContent === currentCorrectCharacter)
                currentCell.style.backgroundColor = "green";

        }


        this.#currentGuessNum++;
        this.#currentGuessIndex = 0;
    }

    #getCellsInCurrentRow() {
        let cellsInCurrentRow = [];
        for (let col = 0; col < WORD_LENGTH; col++) {
            let currentCell = this.#getCell(this.#currentGuessNum, col);
            cellsInCurrentRow.push(currentCell);
        }
        return cellsInCurrentRow;
    }

    #getCurrentGuess() {
        let currentGuess = ""
        for (let col = 0; col < WORD_LENGTH; col++) {
            let currentCell = this.#getCell(this.#currentGuessNum, col);
            currentGuess += currentCell.textContent.toLowerCase();
        }
        return currentGuess;
    }

    #getCell(rowNum, colNum) {
        let rows = Array.from(this.#board.children);
        let row = Array.from(rows[rowNum].children)
        return row[colNum];
    }
}

export default Board;