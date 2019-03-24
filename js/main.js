calculator.addEventListener('click', e=> {              
    if (e.target.classList.contains('digit-button')) {
        if (catchNonNumberResult(screen.value)) {
            return false
        };
        const selectedNumber = e.target.innerText;
        eraseZeroInputtedAtBeginningOfInteger();
        inputDigitDecidingIfItIsNewNumber(selectedNumber);
    } 
    else if (e.target.classList.contains('math-operation-button')) {
        if (catchNonNumberResult(screen.value)) {
            return false
        };
        const selectedOperation = e.target.innerText;
        if (dropResult) {
            dropResult = false;
        }
        if (result === null) {
            result = parseFloat(screen.value);
        }
        newNumber = true;
        secondNumber = null;
        switch (selectedOperation) {
            case "+":
                mathOperation = "addition";
                break;
            case "-":
                mathOperation = "subtraction";
                break;
            case "x":
                mathOperation = "multiplication";
                break;
            case "/":
                mathOperation = "division";
                break;
            case "%":
                mathOperation = "remainderInDivision";
                break;
            default:
                mathOperation = null;
                screen.value = "ERROR";
                break;
        }
    }
});

clearSign.addEventListener("click", function(e){      
    screen.value = "";
    dropResult = false;
    secondNumber= null;
    mathOperation = null;
    result = null;
    newNumber = true;
    e.preventDefault();
});

backspaceSign.addEventListener("click", function(e){      
    e.preventDefault();
    if (!newNumber){
        screen.value = screen.value.slice(0,-1);
        if (screen.value === "") {
            screen.value = "0"
        } 
    }    
});

plusMinusSign.addEventListener("click", function(e){    
    e.preventDefault();
    if (catchNonNumberResult(screen.value)) {         
        return false     
    };
    if (screen.value === "0") {
        return false;
    };
    if (dropResult) {
        dropResult = false;
    };
    screen.value.charAt(0) === "-" ? screen.value = screen.value.substring(1) : screen.value = "-" + screen.value;
});

decimalPointSign.addEventListener("click", function(e){     
    e.preventDefault();
    if (catchNonNumberResult(screen.value)) {         
        return false     
    };
    if (dropResult) {
        result = null;
        dropResult = false;
    };
    if (newNumber){
        screen.value = "0"
        newNumber = false
    };
    screen.value += "."
});

equalSign.addEventListener("click", function(e){      
    e.preventDefault();
    if (catchNonNumberResult(screen.value)) {         
        return false     
    };

    if (screen.value === "") {                                      
        mathOperation = null;                                                 
        return false;

    }   else if (result === null && mathOperation === null) {                
        result = parseFloat(screen.value);

    }   else if (result !== null && mathOperation === null) {                
        screen.value = result;

    }   else if (result !== null && mathOperation !== null && newNumber === true && secondNumber === null) {        
        secondNumber = result;
        calculation();                                                                               
        screen.value = result;

    }   else if (result !== null && mathOperation !== null && newNumber === false && secondNumber === null) {                                                                   
        secondNumber = parseFloat(screen.value);
        calculation();
        screen.value = result;

    }   else if (secondNumber !== null) {                                                                                  
        calculation();
        screen.value = result;
    }  

    dropResult = true;
    newNumber = true;
});

document.onkeypress = function (e) {   
        e.preventDefault();
        if (catchNonNumberResult(screen.value)) {
            return false
        };
        if (!isNaN(e.key)) {
            const selectedNumber = e.key;
           
            eraseZeroInputtedAtBeginningOfInteger();
            inputDigitDecidingIfItIsNewNumber(selectedNumber);

        } else if (Object.values(mathOperationKeys).includes(e.keyCode)) {
            const selectedOperation = e.key;
            if (dropResult) {
                dropResult = false;
            }
            if (result === null) {
                result = parseFloat(screen.value);
            }
        
            newNumber = true;
            secondNumber = null;
            switch (selectedOperation) {
                case "+":
                    mathOperation = "addition";
                    break;
                case "-":
                    mathOperation = "subtraction";
                    break;
                case "*":
                    mathOperation = "multiplication";
                    break;
                case "/":
                    mathOperation = "division";
                    break;
                case "%":
                    mathOperation = "remainderInDivision";
                    break;
                default:
                    mathOperation = null;
                    screen.value = "ERROR";
                    break; 
            }
        } else if (Object.values(equalKeys).includes(e.keyCode)) {
            if (screen.value === "") {                                      
                mathOperation = null;                                              
                return false;

            } else if (result === null && mathOperation === null) {                
                result = parseFloat(screen.value);

            } else if (result !== null && mathOperation === null) {                
                screen.value = result;

            } else if (result !== null && mathOperation !== null && newNumber === true && secondNumber === null) {      
                secondNumber = result;
                calculation();
                screen.value = result;

            } else if (result !== null && mathOperation !== null && newNumber === false && secondNumber === null) {                                                                                 
                secondNumber = parseFloat(screen.value);
                calculation();
                screen.value = result;

            } else if (secondNumber !== null) {                                                                                  
                calculation();
                screen.value = result;
            }
            dropResult = true;
            newNumber = true; 
        } else if (e.keyCode === decimalPointKey) {
            if (dropResult) {
                result = null;
                dropResult = false;
            }
            if (newNumber) {
                screen.value = "0"
                newNumber = false
            }
            screen.value += "."
        }   
}

document.onkeydown = function (e) {
    if (e.keyCode === 46) {
        screen.value = "";
        dropResult = false;
        secondNumber = null;
        mathOperation = null;
        result = null;
        newNumber = true;
        e.preventDefault();
    }
}