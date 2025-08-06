let currentInput = ''
let currentOperation = ''
let previousInput = ''

function appendNumber(number) {
    currentInput += number
    document.getElementsByClassName("screen")[0].innerText = `${previousInput} ${currentOperation} ${currentInput}`

}

function appendOperation(operation) {
    if (currentInput === '') return;
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementsByClassName("screen")[0].innerText = `${previousInput} ${currentOperation}`
}
