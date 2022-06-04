const button = document.querySelector("button")
const alertBox = document.querySelector('.alert')
const svg = document.querySelector("svg")
const header = document.getElementById("header")
const buttonText = document.querySelector("#button-text")
const box = document.querySelector("#box")
const para = document.querySelector("#para")
const counterSpan = document.getElementById("counter")
const zeruj = document.getElementById("zeruj")
button.addEventListener('click', () => {
    alertBox.style.display = "flex";
})

svg.addEventListener("click", () => {
    alertBox.style.display = "none";
})

document.addEventListener("click", (e) => {
    if (e.target != button && e.target != buttonText && e.target != box && e.target != para && e.target != header && e.target != zeruj && e.target != counterSpan) {
        alertBox.style.display = "none"
    }
})

let counter = Number(localStorage.getItem('counter'))
button.addEventListener('click', () => {
    if (counter >= 5) {
        zeruj.style.display = "flex"
    }
    counter += 1
    counterSpan.innerHTML = counter
    localStorage.setItem('counter', counter)
})
counterSpan.innerHTML = counter



zeruj.addEventListener("click", () => {
    counter = 0
    counterSpan.innerHTML = counter
    localStorage.setItem('counter', counter)
    zeruj.style.display = "none"
})