




function createNewArray(cardArray) {
    let newCardArray = [];
    let iteration = 1;
    cardArrayLength = cardArray.length;
    for (let index = cardArrayLength - 1; index >= 0; index -= 1) {
        if (iteration % 2 === 1) {
            console.log("Is Odd")
        }
        else {
            console.log("Is Even")
        }
        iteration += 1;
    }
}


function createArray(inputtedNumber) {
    let cardArray = [];
    for (let number of inputtedNumber) {
        number = parseInt(number);
        cardArray.push(number);
    }
    createNewArray(cardArray);
}


function gatherCardNumber(event) {
    event.preventDefault();
    inputtedNumber = document.getElementById("ccNumber").value;
    createArray(inputtedNumber);
}


function addSubmitListener() {
    form = document.querySelector("form");
    form.addEventListener("submit", gatherCardNumber);
}


window.addEventListener("load", addSubmitListener);