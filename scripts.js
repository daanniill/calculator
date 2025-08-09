let currentInput = ''
let currentOperation = ''
let previousInput = ''
let afterEqual = false

function appendNumber(number) {
    if (currentInput === 'infinity') {
        document.getElementsByClassName("screen")[0].innerText = `infinity`
        return
    }
    if (afterEqual) {
        currentInput = ''
        afterEqual = false
    }
    if (currentInput.length < 8) {
        currentInput += number
        document.getElementsByClassName("screen")[0].innerText = `${currentOperation} ${currentInput}`
    }
    else {
        currentInput += number
        let temp = currentInput
        let numberValue = parseFloat(temp)
        numberValue = numberValue.toExponential(2)
        if (numberValue.toString().length > 8)
        {
            currentInput = 'infinity'
            document.getElementsByClassName("screen")[0].innerText = `infinity`
        }
        else {
            document.getElementsByClassName("screen")[0].innerText = `${currentOperation} ${numberValue}`
        }
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
    document.getElementsByClassName("screen")[0].innerText = `${currentOperation}`
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    if (previousInput === 'infinity' || currentInput === 'infinity') {
        document.getElementsByClassName("screen")[0].innerText = `infinity`
        return
    }
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
    afterEqual = true;
    if (currentInput.length < 8) {
        document.getElementsByClassName("screen")[0].innerText = `${currentInput}`
    }
    else {
        let temp = currentInput
        let numberValue = parseFloat(temp)
        numberValue = numberValue.toExponential(2)
        if (numberValue.toString().length > 8)
        {
            currentInput = 'infinity'
            document.getElementsByClassName("screen")[0].innerText = `infinity`
        }
        else {
            document.getElementsByClassName("screen")[0].innerText = `${currentOperation} ${numberValue}`
        }
    }
}

function radicand() {
    if (currentInput === 'infinity') {
        document.getElementsByClassName("screen")[0].innerText = `infinity`
        return
    }
    currentInput = parseFloat(currentInput)
    currentInput = Math.sqrt(currentInput)
    currentInput = currentInput.toString()
    afterEqual = true
    if (currentInput.length < 8) {
        document.getElementsByClassName("screen")[0].innerText = `${currentInput}`
    }
    else {
        let temp = currentInput
        let numberValue = parseFloat(temp)
        numberValue = numberValue.toFixed(6)
        if (numberValue.toString().length > 8)
        {
            numberValue = parseFloat(temp)
            numberValue = numberValue.toExponential(2)
            if (numberValue.toString().length > 8)
            {
                currentInput = 'infinity'
                document.getElementsByClassName("screen")[0].innerText = `infinity`
            }
            else {
                document.getElementsByClassName("screen")[0].innerText = `${numberValue}`
            }
        }
        else {
            document.getElementsByClassName("screen")[0].innerText = `${numberValue}`
        }
    }
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementsByClassName("screen")[0].innerText = '';
}