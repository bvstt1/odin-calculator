//Select screen and create the number paragraph to show
const screen = document.querySelector("#screen");
digit = document.createElement("p");
digit.style.padding = "0px 15px"
screen.appendChild(digit);

// Buttons
const buttonAC = document.querySelector("#button-AC");
const buttonDEL = document.querySelector("#button-DEL");
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

// Global Variables
let arrayNum = [];
let intNum = null;
let intNum2 = null;

// Boolean Operations
let sum = false;
let sub = false;
let mult = false;
let div = false;


// Buttons events
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

function screenKey(num) {

    digit.style.fontSize = "100px"

    // Simulating calculator on
    screen.style.backgroundColor = "rgb(219, 255, 240)";

    // Display and save numbers in to the variables intNum and intNum2, according if a boolean operations is true or not
    if (sum || sub || mult || div) {
        intNum2 = null;
        arrayNum.push(num);
        let strNum2 = arrayNum.join("");
        intNum2 = Number(strNum2);
        digit.textContent = intNum2;
    } else {
        colorOperation();
        arrayNum.push(num);
        let strNum = arrayNum.join("");
        intNum = Number(strNum);
        digit.textContent = intNum;
    }
}

// Function and AC button event to delete and reset all parameters
buttonAC.addEventListener("click", () => {
    sum = sub = mult = div = false;
    arrayNum = [];
    colorOperation();
    digit.textContent = "";
    screen.style.backgroundColor = "rgba(190, 190, 190, 0.71)";
});

// Function and C button event to delete the last number entered
buttonDEL.addEventListener("click", () => {
    arrayNum.pop();
    let strNum = arrayNum.join("");
    intNum = Number(strNum);
    digit.textContent = strNum;
});


buttonPlusMinus.addEventListener("click", () => {
    if (sum || sub || mult || div) {
        if (intNum2 !== null) {
            intNum2 = -intNum2;
            digit.textContent = intNum2;
        }
    } else {
        if (intNum !== null) {
            intNum = -intNum;
            digit.textContent = intNum;
        }
    }
});


buttonDecimal.addEventListener("click",()=>{

    if(arrayNum.includes(".")){
        return;
    }
    arrayNum.push(".");
    strNum = arrayNum.join("");
    digit.textContent = strNum;
})


buttonPercent.addEventListener("click",() =>{
    intNum = intNum * 0.01;
    arrayNum = [];
    arrayNum.push(intNum);
    strNum = arrayNum.join("");
    arrayNum = strNum.split("");
    digit.textContent = intNum;
})


// Function to change the color if the boolean operation variable is true or not
function colorOperation() {
    buttonAdd.style.backgroundColor = sum ? "#def7a4" : "#A9C46C";
    buttonSubtract.style.backgroundColor = sub ? "#def7a4" : "#A9C46C";
    buttonMultiply.style.backgroundColor = mult ? "#def7a4" : "#A9C46C";
    buttonDivide.style.backgroundColor = div ? "#def7a4" : "#A9C46C";
}

function operationButtons(operateButton) {
    // It is checked when an operation is active before activating the next one.
    if (sum || sub || mult || div) {
        operate();
    }
    
    // If the button pressed is the operation, the varible acording to the operation is set to true, the others set to false, and executes the formula
    if (operateButton === buttonAdd) {
        sum = true;
        sub = mult = div = false;
    } else if (operateButton === buttonSubtract) {
        sub = true;
        sum = mult = div = false;
    } else if (operateButton === buttonMultiply) {
        mult = true;
        sum = sub = div = false;
    } else if (operateButton === buttonDivide) {
        div = true;
        sum = sub = mult = false;
    }
    
    arrayNum = [];
    colorOperation();
}

buttonAdd.addEventListener("click", () => operationButtons(buttonAdd));
buttonSubtract.addEventListener("click", () => operationButtons(buttonSubtract));
buttonMultiply.addEventListener("click", () => operationButtons(buttonMultiply));
buttonDivide.addEventListener("click", () => operationButtons(buttonDivide));

buttonEquals.addEventListener("click", () => operate());

function operate() {
    // Verify that both numbers are defined and are not null
    if (intNum === null || intNum2 === null) {
        return;  // Does not perform the operation if any number is missing
    }

    if (sum) {
        intNum = intNum + intNum2;
    } else if (sub) {
        intNum = intNum - intNum2;
    } else if (mult) {
        intNum = intNum * intNum2;
    } else if (div) {
        if (intNum2 === 0) {
            digit.textContent = "ERROR!";
            intNum = null;
            div = false;
            arrayNum = [];
            colorOperation();
            return;  // Does not perform the operation if an attempt is made to divide by zero
        }
        intNum = intNum / intNum2;
    }
    // Reset the operating variables
    sum = sub = mult = div = false;
    arrayNum = [];
    intNum2 = null;
    digit.textContent = intNum;  // Show the result
    colorOperation();  // Update the buttons colors
}