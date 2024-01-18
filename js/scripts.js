

function validateCard(event) {
    event.preventDefault();
    console.log("Validate Reached");
}


function addSubmitListener() {
    form = document.querySelector("form");
    form.addEventListener("submit", validateCard);
}


window.addEventListener("load", addSubmitListener);