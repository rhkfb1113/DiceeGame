const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);
const imageSource1 = './images/dice' + randomNumber1 + '.png';
const imageSource2 = './images/dice' + randomNumber2 + '.png';
const playerImage1 = document.querySelector('.img1');
const playerImage2 = document.querySelector('.img2');
const whoswinner = document.querySelector('h1');

playerImage1.setAttribute('src', imageSource1);
playerImage2.setAttribute('src', imageSource2);

if (randomNumber1 > randomNumber2) {
  whoswinner.innerHTML = 'Player1 Win!';
} else if (randomNumber1 < randomNumber2) {
  whoswinner.innerHTML = 'Player2 Win!';
} else {
  whoswinner.innerHTML = 'Draw!';
}
