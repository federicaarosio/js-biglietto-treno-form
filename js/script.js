// Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.1976 € al km)
// va applicato uno sconto del 17.65% per i minorenni
// va applicato uno sconto del 53.27% per gli over 65.
// MILESTONE 1:
//  Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
// La risposta finale (o output) sarà anch’essa da scrivere in console.


const buttonSend = document.querySelector("button");

buttonSend.addEventListener('click',
function() {
    //chiedo il numero di km e l'età
    const userDistance = document.getElementById("distance-input").value;
    const passengerAge = document.getElementById("passengerAge-input").value;
    console.log(userDistance);
    console.log(passengerAge);

    //calcolo prezzo totale biglietto
    const ticketPrice = parseFloat(userDistance) * 0.1976;
    console.log(ticketPrice);
})