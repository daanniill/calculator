let currentInput = ''
let currentOperation = ''
let previousInput = ''

function appendNumber(number) {
    currentInput += number
    document.getElementsByClassName("screen")[0].innerText = `${previousInput} ${currentOperation} ${currentInput}`

}

