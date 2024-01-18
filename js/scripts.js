




function createNewArray(cardArray) {
    let newCardArray = [];
    cardArrayLength = cardArray.length;
    for (let index = cardArrayLength - 1; index >= 0; index -= 2) {
        console.log(cardArray[index]);
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