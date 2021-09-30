const button = document.querySelector(".icon-arrow")
const emailInput = document.getElementById("email")
const borderInitialColor = emailInput.style.borderColor;
const errorMessageEl = document.getElementById("error-message")

button.addEventListener("click", function () {
    const value = emailInput.value

    if (value === "") {
        errorMessageEl.style.display = "block"
        emailInput.style.borderColor = "red"
    } else if (!value.includes("@") || !value.includes(".")) {
        errorMessageEl.style.display = "block"
        emailInput.style.borderColor = "red"
    }

})


emailInput.addEventListener("input", function () {
    emailInput.style.borderColor = borderInitialColor;
    errorMessageEl.style.display = "none";
})

