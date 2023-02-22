/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, */

const listName = [
    'Marco',
    'Mary',
    'Phil',
    'June',
]
/* 
chiedi all’utente il suo nome */
const inviteName = prompt('Qual è il tuo nome?')
console.log(inviteName);

/* Verifica se il nome è nella lista */

let message = false;
let i = 0
while (i < listName.length) {
    const validName = listName[i]
    console.log(validName);

    if (inviteName == validName) {
        message = true ;
    
    }
  i++

  let userMessage = document.querySelector("h1");
  
  if (message) {
  
      userMessage.innerHTML = "Benvenuto" 
      
  } else {
  userMessage.innerHTML = "Ci spiace, non è invitato alla festa"
  }

}









 /* comunicagli se può partecipare o no alla festa. */