/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo. */

/* genera un numero random da 1 a 6  per il giocatore*/
const player_num = Math.floor(Math.random() * 6) + 1;
console.log("Player number:", player_num);

/* genera un numero random da 1 a 6  per il computer*/
const computer_num = Math.floor(Math.random() * 6) + 1;
console.log("Computer number:", computer_num);

if(player_num > computer_num){

    alert("Player is the winner");
      
}else{

    alert("Computer is the winner");
       
}