'use strict';

let intro = prompt('What is your name?');
alert('Welcome ' + intro + '! Let\'s begin the quiz!✨ (yes/no or y/n answers)');


let orgin = prompt('Was I born in San Fransisco?');

if (orgin === 'no' || orgin === 'n') {
    alert('You got it right! I was born in Walnut Creek');
} else if (orgin === 'yes' || orgin === 'y'); {
    alert('Maybe next time.🤷🏽‍♀️ I was actually born in Walnut Creek.');
}


let favortiteColor = prompt('Do you think my favorite color is green?');

if (favortiteColor === 'yes' || favortiteColor ==='y') {
    //console.log('wrong')
    alert('Sorry, try again.');
} else if (favortiteColor === 'no' || favortiteColor === 'n') {
    alert('Correct! It\'s actually purple!💜')
}

let team = prompt('Is my favorite basketball team the Lakers?');

if (team === 'yes' || team === 'y') {
    alert('It sure is! Don\'t be a hater!💛💜');
} else if (team === 'no' || team === 'n') {
    alert('YOU\'RE WRONG!!!🤷🏽‍♀️');
}

let dreamCity = prompt('Do you think my dream destination is Thailand?');

if (dreamCity === 'yes' || dreamCity === 'y') {
    alert('Sorry, wrong continent. My dream destination is Italy🍝🍷');
} else if (dreamCity === 'no' || dreamCity === 'n') {
    alert('You are correct! Italy is my dream.🍝🍷');
}

let food = prompt('Is my favorite cuisine Mexican?');

if (food === 'yes' || food === 'y') {
    alert('You did it!!🎊'); 
}  else if (food === 'no' || food === 'n'); {
    alert('So close. Try again.😖');
}

let numberGuess = 7;
let score = 0;
let numberAttempts = 4;

while(numberAttempts){
let guess = prompt(`Can you guess my lucky number? You must do this within ${numberAttempts} attempts.`);
numberAttempts--;

if (guess > 7){
    alert ('Sorry, your guess is too high');
} else if(guess < 7){
    alert ('So close, but not quite');
} else if (guess === 7){
    alert ('Yes! You did it!=🔮');
break;
score++
}
if (!numberAttempts){
    alert('You are all out of tries.🤷🏽‍♀️ Thanks for playing!');
}
}


let favMovies = ['dirty dancing', 'willy wonka and the chocolate factory', 'the nutty professor', 'pillow talk', 'black panther', 'coming to america', 'moana', 'get out', 'the little mermaid', 'enter the dragon'];
let choice = prompt('What is one of my favorite movie?')


for (let i = 0; i < favMovies.length; i++) {
console.log(favMovies[i])
if (choice === favMovies[i]){
    alert(`You have chosen wisely! ${choice} is one of my favorite movies!`);
} 
}
    alert(`Unfortunately you've chosen incorrectly. ${choice} is not one of my faves.`);