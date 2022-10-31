'use strict';

//make the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//set background color
const displayColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  //when there is no input
  if (score > 0 && !guess) {
    displayMessage('No Number!');

    //winning condition
  } else if (score > 0 && guess === secretNumber) {
    displayMessage('Correct Number!');
    displayColor('#60b347');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    score = 0;

    //guess is wrong
  } else if (score > 1 && guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low');
    score--;
    document.querySelector('.score').textContent = score;

    //game is lost
  } else if (score === 1 && guess !== secretNumber) {
    displayMessage('You lost the game!');
    displayColor('#DC143C');
    document.querySelector('.score').textContent = 0;
    score = 0;
  }
});

//game Reload
document.querySelector('.again').addEventListener('click', function () {
  //location.reload(); - wont work
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start Guessing!');
  displayColor('#222');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
