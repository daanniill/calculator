let currentInput = ''
let currentOperation = ''
let previousInput = ''

function appendNumber(number) {
    if (currentInput.length < 6) {
        currentInput += number
        document.getElementsByClassName("screen")[0].innerText = `${previousInput} ${currentOperation} ${currentInput}`
    }
    else {
        currentInput += number
        let temp = currentInput
        let numberValue = parseFloat(temp)
        numberValue = numberValue.toExponential(2)
        document.getElementsByClassName("screen")[0].innerText = `${previousInput} ${currentOperation} ${numberValue}`
    }
    
}

function appendOperation(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate(); 
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementsByClassName("screen")[0].innerText = `${previousInput} ${currentOperation}`
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    document.getElementsByClassName("screen")[0].innerText = currentInput;
}