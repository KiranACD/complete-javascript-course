'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Initial game state
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
// let player1Score = 0;
// let player2Score = 0;
let activePlayer = 0;
let playing = true;

const checkActivePlayer = function (player) {
  player.classList.contains('player--active');
};

const updateCurrentScore = function (currentScore) {
  if (player0El.classList.contains('player--active')) {
    current0El.textContent = currentScore;
  } else {
    current1El.textContent = currentScore;
  }
};

const switchActivePlayer = function () {
  //   if (player0El.classList.contains('player--active')) {
  //     player0El.classList.remove('player--active');
  //     player1El.classList.add('player--active');
  //   } else {
  //     player1El.classList.remove('player--active');
  //     player0El.classList.add('player--active');
  //   }
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating random dice roll
  if (playing == true) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player.
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      switchActivePlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing == true) {
    let totalScore = Number(
      document.getElementById(`score--${activePlayer}`).textContent
    );
    totalScore += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = totalScore;
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    if (totalScore >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
    } else {
      switchActivePlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  diceEl.classList.add('hidden');
  activePlayer = 0;
  currentScore = 0;
  if (!player0El.classList.contains('player--active')) {
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
  }
});
