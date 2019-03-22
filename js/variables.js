const clearSign = document.getElementsByClassName("other-button")[0];
const backspaceSign = document.getElementsByClassName("other-button")[1];
const plusMinusSign = document.getElementsByClassName("other-button")[2];
const decimalPointSign = document.getElementsByClassName("other-button")[3];
const equalSign = document.getElementsByClassName("other-button")[4];

const screen = document.getElementById("screen");
const calculator = document.querySelector('.calculator');

let mathOperation = null;
let result = null;
let secondNumber= null;
let newNumber = true;
let dropResult = false;

const mathOperationKeys = {
    'add': 43,
    'subtract': 49,
    'multiply': 42,
    'divide': 47
};
const equalKeys = {
    'equal mark': 61,
    'enter': 13
};
const decimalPointKey = 46;

const clearKey;
