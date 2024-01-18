function checkEveryOther(iteration, digit) {
    if (iteration % 2 === 1) {
        console.log("Change Number")
        return digit + 1;
    }
    else {
        console.log("Leave Number As Is")
        return digit;
    }
}


function manipulateNumbers(cardArray) {
    let newCardArray = [];
    let iteration = 1;
    cardArrayLength = cardArray.length;
    for (let index = cardArrayLength - 1; index >= 0; index -= 1) {
        newNumber = checkEveryOther(iteration, cardArray[index]);
        newCardArray.push(newNumber);
        iteration += 1;
    }
    newCardArray.reverse();
    console.log(newCardArray);
}


function createArray(inputtedNumber) {
    let cardArray = [];
    for (let number of inputtedNumber) {
        number = parseInt(number);
        cardArray.push(number);
    }
    manipulateNumbers(cardArray);
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