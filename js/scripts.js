





function createNewArray(cardArray) {
    console.log(cardArray);
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