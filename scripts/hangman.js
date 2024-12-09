//alert("Welcome");
const countries = ["spain", "sweden", "england", "denmark", "uganda", "norway", "usa", "poland", "france", "sudan", "germany"]

const word = () => countries[Math.floor(Math.random() * countries.length)];
const answerArray = [];
const VALIDATION = /^[a-zA-Z]{1,1}$/; //checks (^)the beginning of the validation and checks all that is inside the brackets, the (1) means it should be one and the second sets a limit.

let guessArray = [];
let lives = 0;
let remainingLetters = "";
let pickedCountry = word();
let hasWon = false
let wrongLettersGuessed = [];
lives = pickedCountry.length;

for (let i = 0; i < pickedCountry.length; i++) {
  answerArray.push("_");
}

alert('Lets start the game \nGuess the country name!');
console.log('Lets start the game!\n');
console.log(pickedCountry)
alert('The country has ' + lives + ' letters!!!')

while (lives > 0 && hasWon === false) {

  alert(answerArray.join(" "));

  let guess = prompt('Guess a letter');

  if (VALIDATION.test(guess)) {
    /*if the guess exists in the word that is picked, we go into for loop*/
    if (pickedCountry.includes(guess)) {
      for (let i = 0; i < pickedCountry.length; i++)  // gives the same amount of letters as in the word beginning guessed
        if (pickedCountry[i] === guess)
          answerArray[i] = guess;

      if (answerArray.join("") === pickedCountry) {
        alert(`Congrats!!! You have won and the country is ${pickedCountry}`);
        hasWon = true;
      }
      /*if answerArray = picked country, its a win and we need to quit the game or close the loop*/

    } else {
      lives--;
      /* check if the life is zero and we end the game and reset the game*/

      if (!wrongLettersGuessed.includes(guess)) {
        wrongLettersGuessed.push(guess);
        alert(`Letter '${guess}' doesn't exist in this word!\nYou have ${lives} lives left to play \n wrong letters guessed: ${wrongLettersGuessed}`)

      } else
        alert(`Wrong ${guess} letter or already chosen! You have ${lives}lives left to play`)
    }

    if (lives === 0) {
      alert(`You have lost the game!! The right one was ${pickedCountry}`)
    }

  } else
    alert("Insert a letter and not more than one");
}

alert('Refresh to play again');
