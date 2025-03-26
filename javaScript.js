const screen = document.querySelector("#screen");
digit = document.createElement("p");
digit.style.margin = "0px 15px";
screen.appendChild(digit);

// Buttonss
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

// Operator Functions
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

let arrayNum = [0];
let intNum = 0;
let intNum2 = 0;
let plusMinus = true;

let sum = false;
let sub = false;
let mult = false;
let div = false;

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

function screenKey(num){
    screen.style.backgroundColor="rgba(255, 215, 94, 0.52)";

    if (sum === true || sub === true || mult === true || div === true){
        intNum2 = 0;
        arrayNum.push(num);
        strNum2 = arrayNum.join("");
        intNum2 = Number(strNum2);
        digit.textContent = intNum2;
        console.log("este es el segundo numero: ",intNum2);
    }else{
        arrayNum.push(num);
        strNum = arrayNum.join("");
        intNum = Number(strNum);
        digit.textContent = intNum;
        console.log("este es el primer numero: ",intNum);
    }
    
    console.log("este es el primer numero: ",intNum);
    console.log("este es el array: ", arrayNum);
    console.log("este es el segundo numero: ",intNum2);
}


buttonAC.addEventListener("click", () => {
    resetOperations();
    arrayNum = [];
    digit.textContent = "";
    screen.style.backgroundColor = "#362f1ca2"

});

buttonC.addEventListener("click", () => {
    arrayNum.pop();
    strNum = arrayNum.join("");
    intNum = Number(strNum);
    digit.textContent = intNum;
    return;
});

buttonPlusMinus.addEventListener("click", () =>{
    plusMinus = !plusMinus;
    if (plusMinus === false){
        console.log(plusMinus)
        arrayNum.splice(0,1,(-arrayNum[0]))
    }else{
        console.log(plusMinus)
        arrayNum.splice(0,1,(-arrayNum[0]))
    }
    strNum = arrayNum.join("");
    intNum = Number(strNum);
    digit.textContent = intNum;
    console.log(arrayNum);
    console.log(intNum);
    return;
    
})

buttonPercent.addEventListener("click", () => {
    intNum = intNum * 0.01;
    digit.textContent = intNum;
    return;
})

contAdd = 0;
contSub = 0;
contMult = 0;
contDiv = 0;

function resetOperations() {
    sum = sub = mult = div = false
    contAdd = contDiv = contMult = contMult = 0;
    buttonAdd.style.backgroundColor = "#A9C46C";
    buttonSubtract.style.backgroundColor = "#A9C46C";
    buttonMultiply.style.backgroundColor = "#A9C46C";
    buttonDivide.style.backgroundColor = "#A9C46C";
}

function operationButtons(operateButton1, operateButton2, operateButton3, operateButton4){

    // Operate Add
    arrayNum = [];
    if (operateButton1 === buttonAdd){
        contAdd ++;
        sum = true;
        sub = mult = div = false;
        if(contSub > 0){
            contSub = 0;
            sum = false;
            sub = true;
            operate();
        }else if(contAdd === 2){
            contAdd = 1;
            operate();
        }else if(contMult > 0){
            contMult = 0;
            mult = true;
            sum = false;
            operate();
        }else if (contDiv > 0){
            contDiv = 0;
            div = true;
            sum = false;
            operate();
        }
    }
    // Operate Substract
    if (operateButton1 === buttonSubtract){
        contSub ++;
        sub = true;
        sum = mult = div = false;
        if(contAdd > 0){
            contAdd = 0;
            sub = false;
            sum = true;
            operate();
        }else if(contSub === 2){
            contSub = 1;
            operate();
        }else if(contMult > 0){
            contMult = 0;
            mult = true;
            sub = false;
            operate();
        }else if (contDiv > 0){
            contDiv = 0;
            div = true;
            sub = false;
            operate();
        }
    }
    // Operate Multiply
    if (operateButton1 === buttonMultiply){
        contMult ++;
        mult = true;
        sum = sub = div = false;
        if(contAdd > 0){
            contAdd = 0;
            mult = false;
            sum = true;
            operate();
        }else if(contMult === 2){
            contMult = 1;
            operate();
        }else if(contSub > 0){
            contSub=0;
            sub = true;
            mult = false;
            operate();
        }else if (contDiv > 0){
            contDiv = 0;
            div = true;
            mult = false;
            operate();
        }
    }

    // Operate Divide
    if (operateButton1 === buttonDivide){
        contDiv ++;
        div = true;
        sum = sub = mult = false;
        if(contAdd > 0){
            contAdd = 0;
            div = false;
            sum = true;
            operate();
        }else if(contDiv === 2){
            contDiv = 1;
            operate();
        }else if(contSub > 0){
            contSub=0;
            sub = true;
            div = false;
            operate();
        }else if (contMult > 0){
            contMult = 0;
            mult = true;
            div = false;
            operate();
        }
    }
    console.log("contAdd:", contAdd, "contSub:", contSub, "contMult:", contMult, "contDiv:", contDiv);
}

buttonAdd.addEventListener("click", () => operationButtons(buttonAdd, buttonSubtract, buttonMultiply, buttonDivide));
buttonSubtract.addEventListener("click", () => operationButtons(buttonSubtract, buttonAdd, buttonMultiply, buttonDivide));
buttonMultiply.addEventListener("click", () => operationButtons(buttonMultiply, buttonAdd, buttonSubtract, buttonDivide));
buttonDivide.addEventListener("click", () => operationButtons(buttonDivide, buttonAdd, buttonSubtract, buttonMultiply));


buttonEquals.addEventListener("click", () => operate());

function operate(){
    
    if (sum === true){
        result = intNum + intNum2;
    }else if(sub === true){
        result = intNum - intNum2;
    }else if(mult === true){
        result = intNum * intNum2;
    }else if(div === true){
        result = intNum / intNum2;
    }
    arrayNum = [];
    intNum = result;
    digit.textContent = intNum;
    intNum2 = 0;
    console.log("El resultado es: ",intNum)
    console.log("este es el primer numero: ",intNum);
    console.log("este es el array: ", arrayNum);
    console.log("este es el segundo numero: ",intNum2);
    return;
};
