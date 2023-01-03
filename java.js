let required = document.querySelectorAll("[required]");

let password = document.getElementById("userpassword");
let confirmPassword = document.getElementById("confirmpassword");
let holdError = document.getElementById("holdError");

let submit = document.querySelector("button");


function checkRequired(x) {

    //For loop checking all elements with required attribute

    x.forEach(element => {
        if (element.value != "") {
            element.classList.remove("error");
        }
        else {
            element.classList.add("error");
        }
        
    });
}

function samePassword(x, y) {

    if (x.length != y.length) {
        password.classList.add("error");
        confirmPassword.classList.add("error");
        holdError.classList.add("noMatchError");
    }

    for (i = 0; i < x.length; i++) {
        if (x[i] != y[i]) {
            password.classList.add("error");
            confirmPassword.classList.add("error");
            holdError.classList.add("noMatchError");
        }

        else {
            holdError.classList.remove("noMatchError");
        }
    }

    return;
}

submit.addEventListener("click", () => {

    let userPass = password.value;
    let passConfirmation = confirmPassword.value;

    checkRequired(required);
    samePassword(userPass, passConfirmation);


})