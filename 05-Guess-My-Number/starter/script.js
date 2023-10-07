'use strict';

const getSecretNumber = () => Math.trunc(Math.random() * 20) + 1;

let secretNumber = getSecretNumber();
let score = 20;
let highscore = 0;

const setTextContent = function (element, content) {
  document.querySelector(element).textContent = content;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    setTextContent('.message', '⛔️ Not a valid number!');
  } else if (guess === secretNumber) {
    setTextContent('.message', '🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    setTextContent('.number', secretNumber);
    if (score > highscore) {
      highscore = score;
      setTextContent('.highscore', highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? setTextContent('.message', '📈 Too high!')
        : setTextContent('.message', '📉 Too low!');

      score--;
      setTextContent('.score', score);
    } else {
      setTextContent('.message', '💥 You lost the game!');
      setTextContent('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = getSecretNumber();
  setTextContent('.number', '?');
  score = 20;
  setTextContent('.score', score);
  setTextContent('.message', 'Start guessing');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';

  //   document.querySelector('.guess').value =
});
