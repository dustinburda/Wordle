let board = [...Array(5)].map(elem => Array(5).fill(' '));

let currentGuess = "";
let currentGuessNum = 0;


document.querySelector('body').addEventListener('keydown', event => {
    if ( (!['Backspace', 'Enter'].includes(event.key) && currentGuess.length >= 5) || currentGuessNum >= 5)
        return;

    if (event.key === 'Backspace') {
        if (currentGuess.length === 0)
            return;

        currentGuess = currentGuess.slice(0, -1);
    } else if (event.key === 'Enter') {
        if (currentGuess.length !== 5)
            return;

        for (let i = 0; i < 5; i++)
            board[currentGuessNum][i] = currentGuess[i];

        currentGuessNum++;
        currentGuess = "";
    } else {
        currentGuess += event.key;
    }
});
