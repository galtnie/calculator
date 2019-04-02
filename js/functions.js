const resetResult = function (mustResultBeReset) {
    if (mustResultBeReset) {
        result = null;
        dropResult = false;
    }
}

const handleMathOperation = function () {                   // actual calculation when "=" is pressed
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

const eraseZeroStartingInteger = function () {
    if (screen.value.charAt(0) === "0" && screen.value.charAt(1) !== "." ) {
        isNewNumber = true;
    }
}

const inputDigit = function (symbol) {
    resetResult(dropResult);
    screen.value = isNewNumber ? symbol : screen.value + symbol;
    isNewNumber = false;
};

const catchNonNumberResult = function (value) {
    return value === "Infinity" || value === "NaN" || value === "null" || value === "undefined" ? true : false;
}