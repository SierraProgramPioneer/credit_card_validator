// UI Logic

function result(resultString) {
    const result = document.getElementById("result");
    result.innerText = resultString;
}


// Utility Logic

// Add 2 Digit Numbers Together
function addDigits(digit) {
    const stringDigit = digit.toString();
    let addedDigit = 0;
    let digitArray = stringDigit.split("");
    digitArray.forEach(function (digit) {
        addedDigit = addedDigit += parseInt(digit);
    });
    return addedDigit;
}


// Multiply Digit & Add Values together if Greater than 9
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


// Update Every Other Digit Starting from the Right
function checkEveryOther(iteration, digit) {
    if (iteration % 2 === 1) {
        convertedDigit = multiplyDigit(digit)
        return convertedDigit;
    }
    else {
        return digit;
    }
}


// Check if Number Ends in 0
function endsInZero(sumOfNumbers) {
    if (sumOfNumbers % 10) {
        result("Not a Valid Card Number, Doesn't Meet Luhn Algorithm");
    } else {
        result("Valid Card Number");
    }
}


// Sum Numbers in Array
function sumArrayNumbers(newCardArray) {
    let sumOfNumbers = 0;
    newCardArray.forEach(function (number) {
        sumOfNumbers += number;
    })
    endsInZero(sumOfNumbers);
}


// Create New Array of Update Numbers
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
    sumArrayNumbers(newCardArray);
}


// Check Valid Card Company

function checkCompany(cardArray) {
    if (cardArray[0] === 4 || cardArray[0] === 5 || cardArray[0] === 6) {
        createNewArray(cardArray);
    }
    else if (cardArray[0] === 3) {
        if (cardArray[1] === 4 || cardArray[1] === 7) {
            createNewArray(cardArray);
        }
        else {
            result("Not a Valid Card Number, Not a Valid Company")
        }
    }
    else {
        result("Not a Valid Card Number, Not a Valid Company")
    }
}


// Validate Credit Card Length
function checkLength(cardArray) {
    const length = cardArray.length;
    if (length === 15 || length === 16) {
        checkCompany(cardArray);
    }
    else {
        result("Not a Valid Card Number, Not the Right Amount of Digits")
    }

}

// Create an Array from User Input
function createArray(inputtedNumber) {
    let cardArray = [];
    for (let number of inputtedNumber) {
        number = parseInt(number);
        cardArray.push(number);
    }
    checkLength(cardArray);
}


// Gather User's Input
function gatherCardNumber(event) {
    event.preventDefault();
    inputtedNumber = document.getElementById("ccNumber").value;
    createArray(inputtedNumber);
}


// Add Event Listener to Submit Button
function addSubmitListener() {
    form = document.querySelector("form");
    form.addEventListener("submit", gatherCardNumber);
}


// Window On Load Function
window.addEventListener("load", addSubmitListener);