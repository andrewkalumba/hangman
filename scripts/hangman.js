//alert("Welcome");

  var words=[ "spain", "sweden", "england", "denmark", "uganda",
    "norway", "usa", "poland", "france", "sudan", "germany"];

    var word=words[Math.floor(Math.random()*words.length)];
    var answerArray=[];
    for (var i=0; i<word.length; i++)
    {
       answerArray[i] = "_";
    }
    
    var guessArray=[];
    var lives=word.length;
    lives=lives+2;
    var remainingLetters = word.length;
    alert('lets start the game')
    console.log('Lets start the game!\n');
    while (remainingLetters>0)
    {
      alert(answerArray.join(" ")) 
       console.log(answerArray.join(" "));
       console.log('\n');

       if (lives==1)
       {
        alert("You have one life left")
           console.log('You have 1 life left.');
       }
    
    
       else if(lives>1)
       {
          alert('You have ' + lives + ' lives left!') 
          console.log('You have ' + lives + ' lives left.');
       }
    
    
       var guess  = prompt('Guess a letter. ');
       console.log('\n');
       if (guessArray.includes(guess))
       {
          alert('Already chosen') 
           console.log('Already chosen. ');
       }
       console.log('\n');
       guessArray.push(guess);
       if (guess===null)
       {
           break;
       }
       else if(guess.length!==1)
       {
           alert('Please enter a single letter') 
           console.log('Please enter a single letter.');
           console.log('\n');
       }
    
    
       else if(!word.includes(guess))
       {
           lives--;
           console.log('One life lost. ');
           console.log('\n');
       }
    
    
       else if (lives==0)
       {
           alert('Sorry, you lost!') 
           console.log('Oof');
       }
    
       else
       {
           for (var j=0; j<word.length; j++)
           {
               if (word[j]=== guess)
               {
                   answerArray[j] = guess;
                   remainingLetters--;
               }
           }
       }
    
       if (lives==0)
       {
           break;
       }
    }
    
    
    console.log('\n');
    console.log(answerArray.join(" "));
    console.log('The answer was ' + word + '!');
    console.log('Bye.');
    alert(answerArray.join(" "));
    alert('The word was ' + word + '!');
    alert('Bye');
    
    
  