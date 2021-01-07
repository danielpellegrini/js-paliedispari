// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// asking to the user to type a word
var userWord = prompt('type a word');
console.log('User\'s word is: ' + userWord);

var choosenWord = pali(userWord);
console.log('Reverse word become: ' + choosenWord);


// using a function to reverse the string letters
function pali(word) {
  var backward = '';
  for (i = word.length - 1; i >= 0; i--) { // setting the variable [i] with -1 so in this way it'll start counting from the end of the string.
                                           // then the condition must be more or equal to 0
                                           // then decrease the value (i--) each time the code has been executed

    backward += word[i]; // in this way the string of the variable 'backward' will be filled with the reverse word
  }
  return backward;  // stopping the execution of the function (without 'backward' the value is "undefined")
}

// Conditional Statement
if (choosenWord === userWord) {
  alert('The word is palindrome!')
  console.log('The word is palindrome!')

} else {
  alert('The word isn\'t palindrome.');
  console.log('The word isn\'t palindrome.')
}



// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var evenOdd = prompt('Odds or Even? Choose!').toLowerCase();
var userNum = parseInt(prompt('Type a number from 1 to 5'));
console.log('User\'s number is: ' + userNum);


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

var computerNum = randomNum(1, 5);
console.log('Computer\'s number is: ' + computerNum);

function randomNum(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

// Sommiamo i due numeri

console.log(userNum + computerNum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

var sum = userNum + computerNum;
var even = isEven(sum) // 'even' variable matches with 'isEven' function

function isEven(sum){ // function to verify if the sum is even or odd
  if(sum % 2 === 0){
    return true;
  }
  return false;
}

// Dichiariamo chi ha vinto.

if (even === true && evenOdd === 'even') { // if the user choose Evens, the condition is [true] and he/she wons
  alert('1, 2, 3...\nEvens won!\nYou won!');
} else if (even === false && evenOdd === 'odd') {
  alert('1, 2, 3...\nOdds won!\nYou won!');
} else if (even === true && evenOdd === 'odd') {
  alert('1, 2, 3...\nEvens won!\nYou lose!');
} else if (even === false && evenOdd === 'even') {
  alert('1, 2, 3...\nOdds won!\nYou lose!');
}
