'use strict';



function getName(userName){
  return(userName);
}

let userName = prompt('What is your name?');
if (userName) {
  console.log(getName);
  alert(`Welcome ${userName}! Let's begin the quiz!β¨ (yes/no or y/n answers)`);

}




function questionOne(){
  let userInput = prompt('Was I born in San Fransisco?');
  if (userInput === 'no' || userInput === 'n'){
    alert('You got it right! I was born in Walnut Creek');
    console.log('You got it right! I was born in Walnut Creek');
  } else if (userInput === 'yes' || userInput ==='y'){
    alert('Maybe next time.π€·π½ββοΈ I was actually born in Walnut Creek.');
  }
}
questionOne();


function questionTwo(){
  let userInput = prompt('Do you think my favorite color is green?');
  if (userInput === 'no' || userInput === 'n'){
    alert('Correct! It\'s actually purple!π');
    console.log('Correct! It\'s actually purple!π');
  } else if (userInput === 'yes' || userInput ==='y'){
    alert('wrong');
    console.log('wrong');
  }
}
questionTwo();


function questionThree(){
  let userInput = prompt('Is my favorite basketball team the Lakers?');
  if (userInput === 'no' || userInput === 'n'){
    alert('YOU\'RE WRONG!!!π€·π½ββοΈ');
    console.log('YOU\'RE WRONG!!!π€·π½ββοΈ');
  } else if (userInput === 'yes' || userInput ==='y'){
    alert('It sure is! Don\'t be a hater!ππ');
    console.log('It sure is! Don\'t be a hater!ππ');
  }
}
questionThree();


function questionFour(){
  let userInput = prompt('Do you think my dream destination is Thailand?');
  if (userInput === 'no' || userInput === 'n'){
    alert('You are correct! Italy is my dream.ππ·');
    console.log('You are correct! Italy is my dream.ππ·');
  } else if (userInput === 'yes' || userInput ==='y'){
    alert('Sorry, wrong continent. My dream destination is Italyππ·');
    console.log('Sorry, wrong continent. My dream destination is Italyππ·');
  }
}
questionFour();


function questionFive(){
  let userInput = prompt('Is my favorite cuisine Mexican?');
  if (userInput === 'no' || userInput === 'n'){
    alert('So close. Try again.π');
    console.log('So close. Try again.π');
  } else if (userInput === 'yes' || userInput ==='y'){
    alert('You did it!!π');
    console.log('You did it!!π');
  }
}
questionFive();


function numberGuess() {
    let numberGuess = 7;
      let score = 0;
    let numberAttempts = 4;

    while (numberAttempts) {
        let guess = prompt(`Can you guess my lucky number? You must do this within ${numberAttempts} attempts.`);
        numberAttempts--;

        if (guess > 7) {
            alert('Sorry, your guess is too high');
        } else if (guess < 7) {
            alert('So close, but not quite');
        } else if (guess = 7) {
            alert('Yes! You did it! π?');
            break;
        }
        if (!numberAttempts) {
            alert('You are all out of tries.π€·π½ββοΈ Thanks for playing!');
        }
    }
  }


numberGuess();

function favMovies() {
  let attempts = 6;
  let favMovies = ['dirty dancing', 'willy wonka and the chocolate factory', 'the nutty professor', 'pillow talk', 'black panther', 'coming to america', 'moana', 'get out', 'the little mermaid', 'enter the dragon'];
  let guessRight = false;

  while (attempts > 0) {
    let choice = prompt('What is one of my favorite movie?');
    for (let i = 0; i < favMovies.length; i++) {
      console.log(favMovies[i]);
      if (choice === favMovies[i]) {
        alert(`You have chosen wisely! ${choice} is one of my favorite movies!`);
        guessRight = true;
        break;
      }
    }
    if (guessRight === false) {
      alert(`Unfortunately you've chosen incorrectly. ${choice} is not one of my faves.`);
      attempts--;
    } if (guessRight === true) {
      break;
    }
  }
}
favMovies();
