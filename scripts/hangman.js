//alert("Welcome");

const words = ["spain", "sweden", "england", "denmark", "uganda",
  "norway", "usa", "poland", "france", "sudan", "germany"];

const word = () => words[Math.floor(Math.random() * words.length)];
const answerArray = [];

let guessArray = [];
let lives = word.length;
lives = lives + 2;
let remainingLetters = word.length;

for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

alert('Lets start the game \nGuess the country name!');
console.log('Lets start the game!\n');

while (remainingLetters > 0) {
  alert(answerArray.join(" "))


  if (lives == 1) {
    alert("You have only one life left")

  }

  else if (lives > 1) {
    alert('You have ' + lives + ' lives left!');
    
  }

  var guess = prompt('Guess a letter.');

  if (guessArray.includes(guess)) {
    alert('Already chosen')
  }

  guessArray.push(guess);
  if (guess === null) {
    break;

  } else if (guess.length !== 1) {
    alert('Please enter a single letter')
    console.log('Please enter a single letter.');

  } else if (!word.includes(guess)) {
    lives--;
    alert('One life lost');
    console.log('One life lost.');

  } else if (lives == 0) {
    alert('Oof')
    console.log('Oof');

  } else {
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }

  if (lives == 0) {
    alert('Sorry. you have lost lose!!');
    break;
  }
}

//console.log(answerArray.join(" "));
console.log('The answer was ' + word + '!');
console.log('Bye.');

alert(answerArray.join(" "));
alert('The word was ' + word + '!');
alert('Bye');


/*function allLetter(inputtxt)
{
var letters = /^[A-Za-z]+$/;
if(inputtxt.value.match(letters))
{
 return true;
}
else
{
alert("message");
return false;
}
}*/

