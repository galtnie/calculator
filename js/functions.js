
const calculation = function () {                   // actual calculation when "=" is pressed
    switch (mathOperation) {
        case "addition":
            result += secondNumber;
            break;
        case "subtraction":
            result -= secondNumber;
            break;
        case "multiplication":
            result *= secondNumber;
            break;
        case "division":
            result /= secondNumber;
            break;
        case "remainderInDivision":
            result %= secondNumber;
            break;
        default:
            screen.value = "ERROR";   
        }
};

const eraseZeroInputtedAtBeginningOfInteger = function () {
    if (screen.value.charAt(0) === "0" && screen.value.charAt(1) !== "." ) {
        newNumber = true;
    }
}

const inputDigitDecidingIfItIsNewNumber = function (symbol) {
    if (dropResult) {
        result = null;
        dropResult = false;
    }
    screen.value = newNumber ? symbol : screen.value + symbol;
    newNumber = false;
};

const catchNonNumberResult = function (value) {
    return value === "Infinity" || value === "NaN" || value === "null" || value === "undefined" ? true : false;
}
