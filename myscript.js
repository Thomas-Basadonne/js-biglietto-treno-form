const btn = document.getElementById("#genera");
const age = document.getElementById("#age");
const km = document.getElementById("#km");

const namePassenger = document.getElementById("");
const surnamePassenger = document.getElementById("");
const ticketCode = document.getElementById("");
const ticketPrice = document.getElementById("");

console.log("on load age value:", age.value);

btn.addEventListener("click", function() {
    console.log("on click")
    const prezzoKm = 0.21;
    // 1) chiedere numero km
    let distanza = km.value;
    console.log(distanza);

    // 2) chiedere età passeggero
    let age = age.value;
    console.log(age);

    // 3) calcolare prezzo biglietto
    let price = distanza * prezzoKm;

    // condizioni
    if (age >= 18 && age <= 65) {
        outputMessage =  "Il tuo biglietto costerà: " + (price.toPrecision(3)) + "$";

    } else if (age < 18) {
        // 4) IF minorenne sconto 20%
        let salePrice = price - ((price / 100) * 20);
        outputMessage =  "Il tuo biglietto costerà: " + (salePrice.toPrecision(3)) + "$";
    } else {
        // 5) IF over65 sconto 40%
        let salePrice = price - ((price / 100) * 40);
        outputMessage =  "Il tuo biglietto costerà: " + (salePrice.toPrecision(3)) + "$";
    }

    namePassenger.innerHTML = outputMessage
    surnamePassenger.innerHTML = outputMessage
    ticketCode.innerHTML = outputMessage
    ticketPrice.innerHTML = outputMessage
})