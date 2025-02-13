/* Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */
 
 const userEmail = [
    "user1@gmail.com",
    "user2@gmail.com",
    "user3@gmail.com",
    "user4@gmail.com",
    "user5@gmail.com",
    "user6@gmail.com",
    "user7@gmail.com",
    "user8@gmail.com"
];

// Chiedi all'utente la sua email

const email = prompt("Scrivi la tua Email")

let presents_list = "";

// Controlla che sia nella lista di chi può accedere,

for(let i = 0; i < userEmail.length; i++){

    const this_email = userEmail[i]

   if(this_email === "user1@gmail.com",
    "user2@gmail.com",
    "user3@gmail.com",
    "user4@gmail.com",
    "user5@gmail.com",
    "user6@gmail.com",
    "user7@gmail.com",
    "user8@gmail.com")
    {

        presents_list = "entra"

   }else if(this_email !== "user1@gmail.com",
    "user2@gmail.com",
    "user3@gmail.com",
    "user4@gmail.com",
    "user5@gmail.com",
    "user6@gmail.com",
    "user7@gmail.com",
    "user8@gmail.com")
    {

        presents_list = "non puoi entra"
    }
   
}
console.log(presents_list);


