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