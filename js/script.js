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
    console.log("distance in km: " + userDistance);
    console.log("passenger age: " + passengerAge);

    //calcolo prezzo totale biglietto
    let ticketPrice = parseFloat(userDistance) * 0.1976;
    console.log(ticketPrice);

    //calcolo lo sconto da applicare
    if (passengerAge < 18) {
        ticketPrice = ticketPrice - (ticketPrice * 17.65 / 100);
    } else if (passengerAge >= 65) {
        ticketPrice = ticketPrice - (ticketPrice * 53.27 / 100);
    }

    //scrivo in console l'output (prezzo finale)
    console.log(ticketPrice);
    
    //nome del passeggero
    const nameOnTicket = document.getElementById("name-input").value;
    document.getElementById("name-surname").innerHTML = nameOnTicket;

    //prezzo biglietto sul ticket con due decimali
    document.getElementById("price").innerHTML = ticketPrice.toFixed(2) + "€";

    //carrozza numero
    document.getElementById("wagon").innerHTML = Math.floor(Math.random() * 25);

    //tipologia biglietto
    const under18 = (passengerAge < 18);
    const over65 = (passengerAge >= 65);

    if (under18 == true) {
        document.getElementById("discount").innerHTML = "biglietto minorenni";
    } else if (over65 == true) {
        document.getElementById("discount").innerHTML = "biglietto over 65";
    } else {
        document.getElementById("discount").innerHTML = "biglietto standard";
    }
})