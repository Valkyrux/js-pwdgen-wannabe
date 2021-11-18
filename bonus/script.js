/* in questo script cambierò 
l'algoritmo di generazione della password, 
sempre basata sugli input dell'utente*/

//assegnazione da input del numero preferito dell'utente
let userName = prompt("Inserisci il tuo nome");

let userSurname = prompt("Inserisci il tuo Cognome");

let userColor = prompt("Inserisci il tuo colore preferito");

let userNumber;
let i = 0;

while (isNaN(userNumber)) {
    if (i < 3) {
        userNumber = parseInt(prompt("Inserisci un numero intero"));
        i = i + 1;
    }
    
    else {
        userNumber = parseInt(prompt("Utente MONELLO inserisci un numero intero!!"));
        i = 3;
    }
} 



let userPwd ="";

for (i = 0; i < userNumber; i++) {
    userPwd = userPwd + userName + userSurname + userColor;
}

userPwd = userPwd + (userNumber + 5);

document.getElementById("password").innerHTML = userPwd;