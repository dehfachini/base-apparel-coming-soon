const button = document.querySelector(".icon-arrow")
const emailInput = document.getElementById("email")
const borderInitialColor = emailInput.style.borderColor;
const errorMessageEl = document.getElementById("error-message")

button.addEventListener("click", function () {
    validateEmail()
})

emailInput.addEventListener("input", function () {
    removeErrorMsg()
})

function validateEmail() {
    const value = emailInput.value

    if (!value || !value.includes("@") || !value.includes(".")) {
        errorMessageEl.style.display = "block"
        emailInput.style.borderColor = "red"
    }
}

function removeErrorMsg() {
    emailInput.style.borderColor = borderInitialColor;
    errorMessageEl.style.display = "none";
}