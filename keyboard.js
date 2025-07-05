const keys = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U',' I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J',' K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE']]

class Keyboard {
    constructor(board) {
        let keyboardDiv = document.querySelector(".keyboard");

        for (let row = 0; row < 3; row++) {
            let keyboardRow = document.createElement("div");
            keyboardRow.setAttribute('class', 'keyboard-row');
            this.#buildRow(row, keyboardRow, board);

            keyboardDiv.appendChild(keyboardRow);
        }
    }

    #buildRow(rowNum, keyboardRow, Board) {
        for (let key = 0; key < keys[rowNum].length; key++) {
            let keyboardKeyDiv = document.createElement("div");
            keyboardKeyDiv.classList.add('keyboard-key');

            this.#handleExtendedKeys(key, rowNum, keyboardRow, keyboardKeyDiv);

            keyboardKeyDiv.textContent = keys[rowNum][key];
            keyboardKeyDiv.addEventListener("click", function() {
                if (rowNum === 2) {
                    if (keyboardKeyDiv.classList.contains('enter'))
                        Board.setCurrentGuess();
                    else if (keyboardKeyDiv.classList.contains('delete'))
                        Board.deleteCurrentCharacter();
                } else
                    Board.setCurrentCharacter(keyboardKeyDiv.textContent);
            })

            keyboardRow.appendChild(keyboardKeyDiv);
        }
    }

    #handleExtendedKeys(key, rowNum, keyboardRow, keyboardKeyDiv) {
        if ( (key === 0 || key === keys[rowNum].length - 1) && rowNum === 2) {
            keyboardKeyDiv.classList.add('extended');

            if (key === 0)
                keyboardKeyDiv.classList.add('enter');
            else if (key === keys[rowNum].length - 1)
                keyboardKeyDiv.classList.add('delete');
        }
    }
}


export default Keyboard;