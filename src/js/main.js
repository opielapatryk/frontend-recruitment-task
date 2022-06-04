const button = document.querySelector("button")
const alertBox = document.querySelector('.alert')
const svg = document.querySelector("svg")
const header = document.getElementById("header")
const buttonText = document.querySelector("#button-text")
const box = document.querySelector("#box")
const para = document.querySelector("#para")
button.addEventListener('click', () => {
    alertBox.style.display = "flex";
})

svg.addEventListener("click", () => {
    alertBox.style.display = "none";
})



document.addEventListener("click", (e) => {
    if (e.target != button && e.target != buttonText && e.target != box && e.target != para && e.target != header) {
        alertBox.style.display = "none"
    }
})