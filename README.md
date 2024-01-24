# Credit Card Validator

#### By Melissa Parker

#### A basic JavaScript Program to validate if string of numbers is a valid credit card number.

#### [GH Pages Link](https://sierraprogrampioneer.github.io/credit_card_validator/)

## Technologies Used 

* HTML
*  CSS
*  JavaScript
*  Bootstrap

## Description

The webpage prompts user to enter a credit card number.  The input is reviewed on the following criteria:

* Is the number entered 15-16 digits in length?
    * If no, returns "Not a Valid Credit Card, Not the Right Amount of Digits"

* Does the number entered meet the criteria for a valid credit card company?
    * If no, returns "Not a Valid Card Number, Not a Valid Company"

* Will check number against the [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)
    * If does not meet criteria, returns "Not a Valid Card Number, Doesn't Meet Luhn Algorithm"
    * If yes, returns "Valid Card Number"


## Setup/Installation Requirements

* Run the application in a browser designed to render HTML and CSS files.  

## Known Bugs

* No known bugs, program runs as expected.  Please contact the creator if bug is discovered.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Tests

> Describe: addSubmitListener
Test: "It should add an event listener to the Validate Card Button"
Code: 
    form = document.querySelector("form");
    form.addEventListener("submit", validateCard);

    function validateCard(event) {
    event.preventDefault();
    console.log("Validate Reached");

Expected Output: Validate Reached

______

> Describe: gatherCardNumber
Test: "It should return inputted number into the console.log
Code: 
    inputtedNumber = document.getElementById("ccNumber").value;
    console.log(inputtedNumber);

Input: 123

Expected Output: 123

> Describe: gatherCardNumber
Test: "It should return the typeof input
Code: 
    inputtedNumber = parseInt(document.getElementById("ccNumber").value);
    console.log(typeof inputtedNumber);

Input: 123

Expected Output: number

_____

> Describe: createArray
Test: "It should turn each number into a number type and add each number to an array"
Code: 
    let cardArray = [];
    for (let number of inputtedNumber) {
        number = parseInt(number);
        cardArray.push(number);
    }
    console.log(cardArray);

Input: 1234

Expected Output: [1, 2, 3, 4]



_____

> Describe: createNewArray
Test: "It should output in console log the cardArray from createArray function"
Code: 

function createNewArray(cardArray) {
    console.log(cardArray);

Input: 1234

Expected Output: [1, 2, 3, 4]


> Describe: createNewArray
Test: "It should output the length of the cardArray"

Code: 

    cardArrayLength = cardArray.length;
    console.log(cardArrayLength);

Input: 123

Expected Output: 3

> Describe: createNewArray
Test: "It should output every other inputted number, starting on the right"

Code: 

    cardArrayLength = cardArray.length;
    for (let index = cardArrayLength - 1; index >= 0; index -= 2) {
        console.log(cardArray[index]);

Input: 123456

Expected Output: 6 4 2

Input 2: 1234567

Expected Output 2: 7 5 3 1


> Describe: createNewArray
Test: "It should output odd or even for each iteration of the loop, starting with odd"

Code: 

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

Input: 222

Expected Output: Odd Even Odd

> Describe: createNewArray
Test: "It should pass an even or an odd number to determineAction"

Code: 

    let iteration = 1;
    cardArrayLength = cardArray.length;
    for (let index = cardArrayLength - 1; index >= 0; index -= 1) {
        determineAction(iteration);
        iteration += 1;
    }

    function determineAction(iteration) {

    if (iteration % 2 === 1) {

        console.log("Change Number")
    }
    else {
        console.log("Leave Number As Is")
    }

Input: 222

Expected Output: Change Number, Leave Number as is, Change Number


____

> Describe: sumArrayNumbers

Test: "It should sum the total of numbers in the New Array"

function sumArrayNumbers(newCardArray) {
    let sumOfNumbers = 0;
    newCardArray.forEach(function (number) {
        sumOfNumbers += number;
    })
    console.log(sumOfNumbers);
}

newArray [4, 1, 4];

Expected Output: 9

_____

> Describe: endsInZero

Test: "It notify if sum of digits ends in 0 or not"

function endsInZero(sumOfNumbers) {
    if (sumOfNumbers % 10) {
        console.log("Does Not end in 0");
    } else {
        console.log("Ends in 0");
    }
}

Sum of Numbers: 24

Expected Output: Does Not end in 0

Sum of Numbers: 50

Expected Output: Ends in 0

____

> Describe: checkLength

Test: "Return the number of digits in string of numbers"

function checkLength(cardArray) {
    const length = cardArray.length;
    console.log(length);
}

Input: 1212

Expected Output: 4

> Describe: checkLength

Test: "Will check if card length is 15 or 16 in length and return Valid

function checkLength(cardArray) {
    const length = cardArray.length;
    console.log(length);
}

Input: 1212

Expected Output: 4

_____

> Describe: checkCompany

Test: "Will check if card starts with valid credit card company syntax"

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


Various Tests
