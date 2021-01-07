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
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare, usate i commenti per individuare gli ostacoli da superare e gli aspetti della logica più ostili
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// 3. Se volete, sviluppate tutto nello stesso file html + js, o dividete in cartelle differenti. Insomma, fate come ve pare :D
