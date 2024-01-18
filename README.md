Describe: addSubmitListener
Test: "It should add an event listener to the Validate Card Button"
Code: 
    form = document.querySelector("form");
    form.addEventListener("submit", validateCard);

    function validateCard(event) {
    event.preventDefault();
    console.log("Validate Reached");

Expected Output: Validate Reached

______

Describe: gatherCardNumber
Test: "It should return inputted number into the console.log
Code: 
    inputtedNumber = document.getElementById("ccNumber").value;
    console.log(inputtedNumber);

Input: 123

Expected Output: 123