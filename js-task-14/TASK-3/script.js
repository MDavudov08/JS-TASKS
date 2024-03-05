const btn_1 = document.getElementById("btn_1")
const btn_2 = document.getElementById("btn_2")
const btn_3 = document.getElementById("btn_3")
const btn_4 = document.getElementById("btn_4")
const color_input = document.getElementById("color_input")

btn_1.onclick = () => {
    btn_1.style.backgroundColor = color_input.value
}
btn_2.onclick = () => {
    btn_2.style.backgroundColor = color_input.value
}
btn_3.onclick = () => {
    btn_3.style.backgroundColor = color_input.value
}
btn_4.onclick = () => {
    btn_4.style.backgroundColor = color_input.value
}