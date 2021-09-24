const button = document.querySelector(".icon-arrow")
button.addEventListener("click", function () {
    const emailInput = document.getElementById("email")
    const value = emailInput.value
    const errorMessageEl = document.getElementById("error-message")

    if (value === "") {
        errorMessageEl.style.display="block"
    } else if (!value.includes("@") || !value.includes(".")) {
        errorMessageEl.style.display="block"
    }

})


