'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Correct Number!'
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.guess').value = 18
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor= '#222'
    document.querySelector('.number').style.width='15rem'
    secretNumber = Math.trunc(Math.random() * 20) + 1;
   score=20
   document.querySelector('.score').textContent = score
 
   document.querySelector('.message').textContent = 'Start guessing...';
   document.querySelector('.number').textContent='?'
   document.querySelector('.guess').value = ''


})
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //没有输出时
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  }
  //赢了比赛
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor='#60b347'
    document.querySelector('.number').style.width='30rem'
    document.querySelector('.number').textContent = secretNumber;
  }
  //猜测太大
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ';
      document.querySelector('.score').textContent = 0;
    }
  }
  //猜测太小了
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ';
      document.querySelector('.score').textContent = 0;
    }
  }
});
