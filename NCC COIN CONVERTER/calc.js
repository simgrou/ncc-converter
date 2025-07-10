document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector(".coins");
    const totalDisplay = document.querySelector(".total");
    const button = document.querySelector(".calculate-btn");

    button.addEventListener("click", () => {
        const inputValue = parseFloat(inputField.value);
        if (!isNaN(inputValue)) {
            const total = myCalculation(inputValue);
            totalDisplay.textContent = `${total.toFixed(2)}`;
        } else {
            totalDisplay.textContent = "";
        }
    });
});

function myCalculation(input) {
    return input * 0.018;
}
