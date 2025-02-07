const display = document.getElementById("display");


function append_to_screen(character) {
    display.value += character
}

function clear_screen() {
    display.value = ""
}

function calculate() {
    display.value = eval(display.value)
}