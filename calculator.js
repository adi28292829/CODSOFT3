
let displayValue = '';
let operator = '';
let firstOperand = '';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperator(op) {
    if (firstOperand === '') {
        firstOperand = displayValue;
        displayValue = '';
        operator = op;
        updateDisplay();
    } else {
        calculateResult();
        operator = op;
    }
}

function calculateResult() {
    if (operator !== '' && firstOperand !== '' && displayValue !== '') {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(displayValue);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(displayValue);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(displayValue);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(displayValue);
                break;
            default:
                break;
        }

        displayValue = `${firstOperand} ${operator} ${displayValue} = ${result}`;
        operator = '';
        firstOperand = '';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    firstOperand = '';
    operator = '';
    updateDisplay();
}
