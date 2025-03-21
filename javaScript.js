const numbersDiv = document.querySelector("#numbers")
const numberDiv = document.createElement("div")

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

let operator = undefined;
let num1 = undefined;
let num2 = undefined;

function operate(operator, num1, num2){
    if (operator === "sum"){
        return add(num1, num2);
    }else if(operator === "sub"){
        return subtract(num1, num2);
    }else if(operator === "mult"){
        return multiply(num1, num2);
    }else if(operator === "div"){
        return divide(num1, num2);
    }
}

numbersDiv.chi
