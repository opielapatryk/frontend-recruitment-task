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


document.addEventListener("click", () => {
    notBox.forEach(e => {
        if (e != notBox) {
            alertBox.style.display = "none";
        }
    })
})