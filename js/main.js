const buttons = document.getElementsByClassName("button");
const digitButtons = document.getElementsByClassName("digitButton");
const screen = document.getElementById("screen");
const unblockedKeys = [8, 13, 16, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 114, 187];

let calcType = null;
let result = null;
let factor2= null;
let newNumber = true;
let dropTheResult = false;

const calculation = function () {
    switch (calcType) {
        case 1:
            result += factor2;
            break;
        case 2:
            result -= factor2;
            break;
        case 3:
            result *= factor2;
            break;
        case 4:
            result /= factor2;
            break;
        case 5:
            result %= factor2;
            break;
        default:
            screen.value = "ERROR";   
        }
}

const noNoughtStartsInteger = function () {
    if (screen.value.charAt(0) === "0" && screen.value.charAt(1) !== "." ) {
        newNumber = true;
    }
}

const digit = function (symbol) {
    if (dropTheResult) {
        result = null;
        dropTheResult = false;
    }

    if (newNumber) {
        screen.value = symbol;
        newNumber = false;
    } else {
        screen.value += symbol;
        newNumber = false;
    }
}

const calculationType = function (typeNo) {
        if (dropTheResult) {
        dropTheResult = false;
    }

    if (result === null) {
        result = parseFloat(screen.value);
    }
    calcType = typeNo;
    newNumber= true;
    factor2= null;
}

document.onkeydown = function (e) {                 //to block unnecessary keys on the keyboard
    if (!unblockedKeys.includes(e.keyCode)) {
          return false;
    }    
}

buttons[0].addEventListener("click", function(e){      //c
    screen.value = "";
    dropTheResult = false;
    factor2= null;
    calcType = null;
    result = null;
    newNumber = true;
    e.preventDefault();
})

buttons[1].addEventListener("click", function(e){      //<-
    e.preventDefault();
    if (!newNumber){
        screen.value = screen.value.slice(0,-1);
        if (screen.value === "") {
            screen.value = "0"
        } 
    }    
})

buttons[2].addEventListener("click", function(e){      //%
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {         
        return false     
    };
    calculationType(5)
})

buttons[3].addEventListener("click", function(e){      // /
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {         
        return false     
    };
    calculationType(4)
})

buttons[4].addEventListener("click", function(e){      //*
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {         
        return false     
    };
    calculationType(3)
})

buttons[5].addEventListener("click", function(e){      //-
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {         
        return false     
    };
    calculationType(2)
})

buttons[6].addEventListener("click", function(e){      //+
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {         
        return false     
    };
    calculationType(1)
})

buttons[7].addEventListener("click", function(e){      // +/-
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {         
        return false     
    };

    if (screen.value === "0") return false;

    if (dropTheResult) {
        dropTheResult = false;
    }

    screen.value.charAt(0) === "-" ? screen.value = screen.value.substring(1) : screen.value = "-" + screen.value;
})   



//     newNumber = true;
//     calcType = null;    
// })

buttons[8].addEventListener("click", function(e){      //.
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {         
        return false     
    };
    
    if (dropTheResult) {
        result = null;
        dropTheResult = false;
    }

    if (newNumber){
        screen.value = "0"
        newNumber = false
    }

    screen.value += "."
})

buttons[9].addEventListener("click", function(e){      // =
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {         
        return false     
    };

    if (screen.value === "") {                                      // if nothing is added
        calcType = null;                                                // just in case some calculation button has already been pressed 
        return false;

    }   else if (result === null && calcType === null) {                // if no factor is inputted and calculation type is not specified
        result = parseFloat(screen.value);

    }   else if (result !== null && calcType === null) {                // if only one factor is inputted but calculation type is still not specified
        screen.value = result;

    }   else if (result !== null && calcType !== null && newNumber === true && factor2 === null) {       // if only one factor is inputted and calculation type is specified (but the second factor2 is not inputted) 
        factor2 = result;
        calculation();                                                                               
        screen.value = result;

    }   else if (result !== null && calcType !== null && newNumber === false && factor2 === null) {      // if only one factor is known, calcType is specified and "=" is pressed when there is some number in the screen.value                                                                             
        factor2 = parseFloat(screen.value);
        calculation();
        screen.value = result;

    }   else if (factor2 !== null) {       // if both factors and calculation type is specified                                                                             
        calculation();
        screen.value = result;
    }  

    dropTheResult = true;
    newNumber = true;
})



// Digits 

digitButtons[0].addEventListener("click", function(e){       //7
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {        
        return false     
    };
    noNoughtStartsInteger();
    digit("7");
})

digitButtons[1].addEventListener("click", function(e){       //8
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {        
        return false     
    };
    noNoughtStartsInteger();
    digit("8");
})

digitButtons[2].addEventListener("click", function(e){       //9
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {        
        return false     
    };
    noNoughtStartsInteger();
    digit("9");
})


digitButtons[3].addEventListener("click", function(e){       //4
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {        
        return false     
    };
    noNoughtStartsInteger();
    digit("4");
})

digitButtons[4].addEventListener("click", function(e){       //5
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {        
        return false     
    };
    noNoughtStartsInteger();
    digit("5");
})

digitButtons[5].addEventListener("click", function(e){       //6
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {        
        return false     
    };
    noNoughtStartsInteger();
    digit("6");
})

digitButtons[6].addEventListener("click", function(e){       //1
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {         
        return false
    };
    noNoughtStartsInteger();
    digit("1");  
})

digitButtons[7].addEventListener("click", function(e){       //2
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {         
        return false     
    };
    noNoughtStartsInteger();
    digit("2"); 
})

digitButtons[8].addEventListener("click", function(e){       //3
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {         
        return false     
    };
    noNoughtStartsInteger();
    digit("3");
})

digitButtons[9].addEventListener("click", function(e){       //0
    e.preventDefault();
    if (screen.value === "Infinity" || screen.value === "NaN" || screen.value === "undefined") {        
        return false     
    };
    noNoughtStartsInteger();
    
    if (dropTheResult) {
        result = null;
        dropTheResult = false;
    }

    if (newNumber) {
        screen.value = "0";
        newNumber = false;
    } else {
        screen.value += "0";
        newNumber = false;
    }
})
