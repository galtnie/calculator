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
let isNewNumber = true;
let dropResult = false;

const mathOperationKeys = {
    'add': 43,
    'subtract': 45,
    'multiply': 42,
    'divide': 47,
    'remainder in division': 37
};
const equalKeys = {
    'equal mark': 61,
    'enter': 13
};
const decimalPointKey = 46;

let clearKey;
