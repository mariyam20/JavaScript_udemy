const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Get input from input field
function getUserNumberInput() {
    return usrInput.value;
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

// function calculateResult(calculationType) {
//     const enteredNumber = getUserNumberInput();
//     if (
//         calculationType !== 'ADD' &&
//         calculationType !== 'SUBTRACT' &&
//         calculationType !== 'MULTIPLY' &&
//         calculationType !== 'DIVIDE'
//         // !enteredNumber
//     ) {
//         return;
//     }

// if (
// calculationType === 'ADD' || 
// calculationType === 'SUBTRACT' ||
// calculationType === 'MULTIPLY' ||
// calculationType === 'DIVIDE'
// ) {




// const enteredNumber = getUserNumberInput();
// const initialResult = currentResult;
// let mathOperator;
// if (calculationType === 'ADD') {
//     currentResult += enteredNumber;
//     mathOperator = '+';
// } else if (
//     calculationType === 'SUBTRACT') {
//     currentResult -= enteredNumber;
//     mathOperator = '-';
// } else if (calculationType === 'MULTIPLY') {
//     currentResult *= enteredNumber;
//     mathOperator = '*';
// } else if (calculationType === 'DIVIDE') {
//     currentResult /= enteredNumber;
//     mathOperator = '/';
// }



// createAndWriteOutput(mathOperator, initialResult, enteredNumber);
// writeToLog(calculationType, initialResult, enteredNumber, currentResult);

//     logEntries.push(logEntry);
//     console.log(lognResuly);


// }
// }

// function add() {
//     // calculateResult('ADD');
//     const enteredNumber = getUserNumberInput();
//     // console.log('INPUT', enteredNumber, currentResult);
//     const initialResult = currentResult;
//     currentResult += enteredNumber;
//     createAndWriteOutput('+', initialResult, enteredNumber);
//     writeToLog('ADD', initialResult, enteredNumber, currentResult);

// }

// function subtract() {
//     // calculateResult('SUBTRACT');
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult -= enteredNumber;
//     createAndWriteOutput('-', initialResult, enteredNumber);
//     writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);

// }

// function multiply() {
//     // calculateResult('MULTIPLY');
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult *= enteredNumber;
//     createAndWriteOutput('*', initialResult, enteredNumber);
//     writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
// }

// function divide() {
//     // calculateResult('DIVIDE');
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult /= enteredNumber
//     createAndWriteOutput('/', initialResult, enteredNumber);
//     writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
// }

function calculate(operation) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let operator;
    if (operation === 'ADD') {
        currentResult += enteredNumber;
        operator = '+';
    } else if (operation === 'SUBTRACT') {
        currentResult -= enteredNumber;
        operator = '-';
    } else if (operation === 'MULTIPLY') {
        currentResult *= enteredNumber;
        operator = '*';
    } else {
        currentResult /= enteredNumber;
        operator = '/';
    }
    createAndWriteOutput(operator, initialResult, enteredNumber);
    writeToLog(operation, initialResult, enteredNumber, currentResult);

}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));
















// const defaultResult = 0;
// let currentResult = defaultResult;

// currentResult = (currentResult + 10) * 3 / 2 - 1;

// let calculationDescription = '(' + currentResult + '+ 10) * 3 / 2 - 1';
// outputResult(currentResult, calculationDescription);



// const defaultResult = 0;
// let currentResult = defaultResult;

// function add() {
//     const enteredNumber = parseInt(usrInput.value);
//     const calcDescription = `${currentResult} + ${enteredNumber}`;
//     currentResult = currentResult + enteredNumber;
//     outputResult(currentResult, calcDescription);
//     // return result;
// }


// addBtn.addEventListener('click', add);