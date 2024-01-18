

function gatherCardNumber(event) {
    event.preventDefault();
    inputtedNumber = parseInt(document.getElementById("ccNumber").value);
    console.log(typeof inputtedNumber);
}


function addSubmitListener() {
    form = document.querySelector("form");
    form.addEventListener("submit", gatherCardNumber);
}


window.addEventListener("load", addSubmitListener);