let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log("Random number is:", randomNumber);
let submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
let guessSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resulparas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert('Please enter a number between 1 and 100');
            return;
        }

        prevGuess.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    });
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('🎉 You guessed it right!');
        endGame();
    } else if (numGuess === 11) {
        displayMessage(`💀 Game Over. Random number was ${randomNumber}`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('📉 Number is too low');
    } else if (guess > randomNumber) {
        displayMessage('📈 Number is too high');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    remaining.innerHTML = `${10 - numGuess}`;
    numGuess++;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHi.innerHTML = '';
        playGame = true;
    });
}
