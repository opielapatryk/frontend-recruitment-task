const button = document.querySelector("button")
const alertBox = document.querySelector('.alert')
const svg = document.querySelector("svg")
const header = document.getElementById("header")
const buttonText = document.querySelector("#button-text")
const box = document.querySelector("#box")
const para = document.querySelector("#para")
const counterSpan = document.getElementById("counter")
const reset = document.getElementById("reset")
button.addEventListener('click', () => {
    alertBox.style.display = "flex";
})

svg.addEventListener("click", () => {
    alertBox.style.display = "none";
})

document.addEventListener("click", (e) => {
    if (e.target != button && e.target != buttonText && e.target != box && e.target != para && e.target != header && e.target != reset && e.target != counterSpan) {
        alertBox.style.display = "none"
    }
})


let counter = Number(localStorage.getItem('counter'))
button.addEventListener('click', () => {
    if (counter >= 5) {
        reset.style.display = "flex"
    }
    counter += 1
    counterSpan.innerHTML = counter
    localStorage.setItem('counter', counter)
})
counterSpan.innerHTML = counter



reset.addEventListener("click", () => {
    counter = 0
    counterSpan.innerHTML = counter
    localStorage.setItem('counter', counter)
    reset.style.display = "none"
})