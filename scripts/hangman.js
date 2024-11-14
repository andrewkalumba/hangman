//alert("Welcome");

const words = ["spain", "sweden", "england", "denmark", "uganda",
  "norway", "usa", "poland", "france", "sudan", "germany"];

const word = () => words[Math.floor(Math.random() * words.length)];
const answerArray = [];
const VALIDATION = /^[a-zA-Z]{1,1}$/; //checks (^)the beginning of the validation and checks all that is inside the brackets, the (1) means it should be one and the second sets a limit.

let guessArray = [];
let lives = 0;
let remainingLetters = "";
let pickedCountry = word();
let hasWon = false

lives = pickedCountry.length;

for (let i = 0; i < pickedCountry.length; i++) {
  answerArray.push("_");
}

alert('Lets start the game \nGuess the country name!');
console.log('Lets start the game!\n');
console.log(pickedCountry)

while (hasWon === false) {

  //alert(answerArray.join(" "));

  let guess = prompt('Guess a letter.');

  if (guess === null) {
    alert("Game canceled!")
    break;
  }

  if (VALIDATION.test(guess)) {
    if (lives === 1) {
      alert("You have only one life left")
    }
    else if (lives > 1) {
      alert('You have ' + lives + ' lives left!');
    }
    /*if the guess exists in the word that is picked, we go into for loop*/
    if (pickedCountry.includes(guess)) {
      for (let i = 0; i < pickedCountry.length; i++) { // gives the same amount of letters as in the word beginning guessed
        if (pickedCountry[i] === guess) {
          answerArray[i] = guess;
          console.log(i)
        }
      }
      alert(answerArray.join(" "));
      /*if answerArray = picked country, its a win and we need to quit the game or close the loop*/
    }
    else {
      lives--;
      /* check if the life is zero and we end the game and reset the game*/
      if (lives === 0) {
        alert(`You have lost the game!! The right one was ${pickedCountry}`)
        break;
      }
      else {
        if (guessArray.includes(guess)) {
          alert('Already chosen')
        }
        else {
          guessArray.push(guess);
        }
      }
    }
  }
  else {
    alert("Insert a letter and not more than one");
  }
}

alert(answerArray.join(" "));
alert('Bye');
