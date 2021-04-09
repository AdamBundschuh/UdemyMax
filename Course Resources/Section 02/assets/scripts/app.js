const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

currentResult = add(11, 7);

let calculationDescription = 'Description of Calculation';

outputResult(currentResult, calculationDescription);