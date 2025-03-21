const screen = document.querySelector("#screen");
digit = document.createElement("p");
digit.style.margin = "0px 15px";
screen.appendChild(digit);

// Buttons
const buttonAC = document.querySelector("#button-AC");
const buttonC = document.querySelector("#button-C");
const buttonPlusMinus = document.querySelector("#button-plus-minus");
const buttonPercent = document.querySelector("#button-percent");
const button7 = document.querySelector("#button-7");
const button8 = document.querySelector("#button-8");
const button9 = document.querySelector("#button-9");
const buttonDivide = document.querySelector("#button-divide");
const button4 = document.querySelector("#button-4");
const button5 = document.querySelector("#button-5");
const button6 = document.querySelector("#button-6");
const buttonMultiply = document.querySelector("#button-multiply");
const button1 = document.querySelector("#button-1");
const button2 = document.querySelector("#button-2");
const button3 = document.querySelector("#button-3");
const buttonSubtract = document.querySelector("#button-subtract");
const button0 = document.querySelector("#button-0");
const buttonDecimal = document.querySelector("#button-decimal");
const buttonEquals = document.querySelector("#button-equals");
const buttonAdd = document.querySelector("#button-add");

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
let arrayNum = [];
let num2 = [];
let intNum = 0;

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
};

button1.addEventListener("click", () => screenKey(1));
button2.addEventListener("click", () => screenKey(2));
button3.addEventListener("click", () => screenKey(3));
button4.addEventListener("click", () => screenKey(4));
button5.addEventListener("click", () => screenKey(5));
button6.addEventListener("click", () => screenKey(6));
button7.addEventListener("click", () => screenKey(7));
button8.addEventListener("click", () => screenKey(8));
button9.addEventListener("click", () => screenKey(9));
button0.addEventListener("click", () => screenKey(0));

buttonAC.addEventListener("click", () => {
    arrayNum = [];
    digit.textContent = "";
    screen.style.backgroundColor = "#362f1ca2"

});

buttonC.addEventListener("click", () => {
    arrayNum.pop();
    console.log(arrayNum);
    strNum = arrayNum.join("");
    digit.textContent = strNum;

});

function screenKey(num){
    screen.style.backgroundColor="rgba(255, 215, 94, 0.52)";
    arrayNum.push(num);
    strNum = arrayNum.join("");
    intNum = parseInt(strNum);
    digit.textContent = strNum;
    return intNum;
}
