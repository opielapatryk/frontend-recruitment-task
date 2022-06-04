const button = document.querySelector("button")
const alertBox = document.querySelector('.alert')
const svg = document.querySelector("svg")
const notBox = document.querySelectorAll(".not-box")
button.addEventListener('click', () => {
    alertBox.style.display = "flex";
})

svg.addEventListener("click", () => {
    alertBox.style.display = "none";
})