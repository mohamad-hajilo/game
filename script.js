'use strict';

let random_number = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let high_score = 0;

const display_message = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //for save guess number
  const guess_number = Number(document.querySelector('.guess').value);
  //for check number
  if (!guess_number) {
    display_message('PLEASE ENTER NUMBER ⛔⛔');

    //for check true guess or no
  } else if (random_number !== guess_number) {
    display_message(random_number < guess_number ? 'TO HIGH 😮' : 'TO LOW 🤔');

    //for mines score
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 1) {
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff7979';

      display_message('YOU lOST THE GAME 😔😔');
    }
    //for true guess
  } else if (random_number === guess_number) {
    display_message('CORRECT 🎄🎄');
    document.querySelector('.number').textContent = guess_number;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.highscore').textContent = score;
  }
});
//for agin try to guess secret number
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  random_number = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  display_message('START GUESSING...');
});
