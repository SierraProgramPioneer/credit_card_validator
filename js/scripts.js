function addDigits(digit) {
    const stringDigit = digit.toString();
    let addedDigit = 0;
    let digitArray = stringDigit.split("");
    digitArray.forEach(function (digit) {
        addedDigit = addedDigit += parseInt(digit);
    });
    console.log(addedDigit);
    return addedDigit;
}



function multiplyDigit(digit) {
    digit = digit * 2;
    if (digit > 9) {
        summedDigit = addDigits(digit);
        return summedDigit;
    }
    else {
        return digit;
    }
}


function checkEveryOther(iteration, digit) {
    if (iteration % 2 === 1) {
        convertedDigit = multiplyDigit(digit)
        return convertedDigit;
    }
    else {
        return digit;
    }
}


function createNewArray(cardArray) {
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