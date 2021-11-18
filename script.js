/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */

// assegnazione da input alla variabile firstName il nome dell'utente 
let userName = prompt('Inserisci il tuo nome');
// console.log(firstName)

//assegnazione da input alla variabile userSurname il cognome dell'utente 
let userSurname = prompt('Inserisci il tuo cognome');
// console.log(userSurname);

// assegnazione da input alla variabile userFavoriteColor il colore preferito dell'utente
let userFavoriteColor = prompt('Inserisci il tuo colore preferito');
// console.log(userFavoriteColor);

// dichiarazione della costante per l'algoritmo della password (molto efficace)
// dichiaro la costante come numero intero, tanto sommato ad una stringa verrà convertito automaticamente in una stringa
const pwdConst = 21;

// algoritmo di costruzione della password ipercomplesso
let userPwd = userName + userSurname + userFavoriteColor + pwdConst;
// console.log(userPwd);

// inserisco la password all'interno del tag con l'id selezionato
document.getElementById("password-container").innerHTML = userPwd;