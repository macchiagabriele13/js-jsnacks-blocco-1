/* /* L’utente inserisce due parole in successione, con due prompt. */

const firstWordEl = prompt("Inserisci una parola")
console.log(firstWordEl);

const secondWordEl = prompt("Inserisci una nuova parola")
console.log(secondWordEl);

/* let lettere = firstWordEl.split('') + secondWordEl.split('')


let max = lettere[0];


for(var i = 0; i < lettere.length; i++){
  if(lettere[i].length > max.length ){
    max = lettere[i];
  }
}

console.log('la parola più lunga è: ' + max); */



/* Il software stampa prima la parola più corta, poi la parola più lunga. */



/* Soluzione  */
let winner;
if (firstWordEl.length > secondWordEl.length) {
    winner = firstWordEl
} else {
    winner = secondWordEl
}

document.getElementById("winner").innerHTML = ("La parola più lunga è " + winner);