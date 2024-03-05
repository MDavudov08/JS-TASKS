const red_btn = document.getElementById("red_btn")
const green_btn = document.getElementById("green_btn")
const yellow_btn = document.getElementById("yellow_btn")
const blue_btn = document.getElementById("blue_btn")
const colorDisplay = document.getElementById("colorDisplay")

red_btn.onclick = () => {
    colorDisplay.innerHTML = "Secilmis renk "
    colorDisplay.innerHTML += "Red"
    colorDisplay.style.color = "red"
}
green_btn.onclick = () => {
    colorDisplay.innerHTML = "Secilmis renk "
    colorDisplay.innerHTML += "Green"
    colorDisplay.style.color = "green"
}
blue_btn.onclick = () => {
    colorDisplay.innerHTML = "Secilmis renk "
    colorDisplay.innerHTML += "Blue"
    colorDisplay.style.color = "blue"
}
yellow_btn.onclick = () => {
    colorDisplay.innerHTML = "Secilmis renk "
    colorDisplay.innerHTML += "Yellow"
    colorDisplay.style.color = "yellow"
}