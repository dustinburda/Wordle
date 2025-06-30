const WORD_LENGTH = 5;
const NUM_GUESSES = 6;


class Board
{
    #boardState;
    #board;
    #currentGuessNum;
    #currentGuessIndex;
    constructor() {
        this.#board = document.querySelector(".board");
        this.#currentGuessNum = 0;
        this.#currentGuessIndex = 0;

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
        if (this.#currentGuessNum >= NUM_GUESSES || this.#currentGuessIndex !== WORD_LENGTH)
            return;

        this.#currentGuessNum++;
        this.#currentGuessIndex = 0;
    }

    #getCell(rowNum, colNum) {
        let rows = Array.from(this.#board.children);
        let row = Array.from(rows[rowNum].children)
        return row[colNum];
    }
}

export default Board;