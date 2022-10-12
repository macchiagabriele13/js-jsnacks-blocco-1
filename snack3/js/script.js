/* Il software deve chiedere per 10 volte all’utente di inserire un numero. */



 for (let i = 0; i < 10; i++) {
    const number = Number(prompt("Inserisci un numero"))
    console.log(number);
   

    const singleNumber = number[i] + [i];
    console.log(singleNumber);
    
}

/* Il programma stampa la somma di tutti i numeri inseriti.  */

/* Soluzione fabio */

/* let sum = 0
for (let index = 0; index < 10; index++) {
    const userNumber = Number(prompt("Inserisci un numero"));
    sum += userNumber
    
}

console.log(sum); */