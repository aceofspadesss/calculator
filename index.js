function add(num1, num2){
    let add = num1 + num2;
    number1 = add;
    return number1;
};

function sub(num1, num2){
    let sub = num1 - num2;
    number1 = sub;
    return number1;
};

function mul(num1, num2){
    let mul = num1 * num2;
    number1 = mul;
    return mul;
};

function div(num1, num2){
    let div = num1 / num2;
    number1 = div;
    return div;
};

function operate(){
    /*num1Str = prompt("First number?");
    num1 = Number(num1Str);
    userInput = prompt("Operator?");
    num2Str = prompt("Second number?");
    num2 = Number(num2Str);*/
    /*if (userInput == "+"){
       panel.textContent = add(number1, number2);
    } else if (userInput == "-"){
        panel.textContent = sub(number1, number2);
    } else if (userInput == "*"){
        panel.textContent = mul(number1, number2);
    } else if (userInput == "/"){
        panel.textContent = div(number1, number2);
    };*/
    switch (userInput){
        case "+":
            panel.textContent = add(number1, number2);
            break;
        case "-":
            panel.textContent = sub(number1, number2);
            break;
        case "*":
            panel.textContent = mul(number1, number2);
            break;
        case "/":
            panel.textContent = div(number1, number2);
            break;
    }
};

let number1   = '';
let number2   = '';
let userInput = '';
let panel     = document.querySelector('.panel');

panel.textContent = Number(number1);

let bt1       = document.querySelector('.btn1');
let bt2       = document.querySelector('.btn2');
let bt3       = document.querySelector('.btn3');
let bt4       = document.querySelector('.btn4');
let bt5       = document.querySelector('.btn5');
let bt6       = document.querySelector('.btn6');
let bt7       = document.querySelector('.btn7');
let bt8       = document.querySelector('.btn8');
let bt9       = document.querySelector('.btn9');
let bt0       = document.querySelector('.btn0');
let c         = document.querySelector('.clear');
let adding    = document.querySelector('.add');
let substract = document.querySelector('.sub');
let multiply  = document.querySelector('.mul');
let divide    = document.querySelector('.div');
let result    = document.querySelector('.result');

c.addEventListener('click', () => {
    number1 = '';
    number2 = '';
    userInput = '';
    panel.textContent = Number(number1);
});
adding.addEventListener('click', () => {
    if (userInput !== ''){
        operate();
    }
    userInput = '+';
    number2 = 0;
    panel.textContent = number1 + " + ";
    
});
substract.addEventListener('click', () => {
    if (userInput !== ''){
        operate();
    }
    userInput = '-';
    number2 = 0;
    panel.textContent = number1 + " - ";
});
multiply.addEventListener('click', () => {
    if (userInput !== ''){
        operate();
    }
    userInput = '*';
    number2 = 0;
    panel.textContent = number1 + " * ";
});
divide.addEventListener('click', () => {
    if (userInput !== ''){
        operate();
    }
    userInput = '/';
    number2 = 0;
    panel.textContent = number1 + " / ";
});
result.addEventListener('click', () =>{
    operate();
    panel.textContent = number1;
});
bt1.addEventListener('click', () => {
    if (userInput == ''){
    number1 = number1 + '1';
    number1 = Number(number1);
    panel.textContent = number1;
    } else {
        number2 = number2 + '1';
        number2 = Number(number2);
        panel.textContent = number1 + " " + userInput + " " + number2;
    }
});
bt2.addEventListener('click', () => {
    if (userInput == ''){
        number1 = number1 + '2';
        number1 = Number(number1);
        panel.textContent = number1;
        } else {
            number2 = number2 + '2';
            number2 = Number(number2);
            panel.textContent = number1 + " " + userInput + " " + number2;
        }
});
bt3.addEventListener('click', () => {
    if (userInput == ''){
        number1 = number1 + '3';
        number1 = Number(number1);
        panel.textContent = number1;
        } else {
            number2 = number2 + '3';
            number2 = Number(number2);
            panel.textContent = number1 + " " + userInput + " " + number2;
        }
});
bt4.addEventListener('click', () => {
    if (userInput == ''){
        number1 = number1 + '4';
        number1 = Number(number1);
        panel.textContent = number1;
        } else {
            number2 = number2 + '4';
            number2 = Number(number2);
            panel.textContent = number1 + " " + userInput + " " + number2;
        }
});
bt5.addEventListener('click', () => {
    if (userInput == ''){
        number1 = number1 + '5';
        number1 = Number(number1);
        panel.textContent = number1;
        } else {
            number2 = number2 + '5';
            number2 = Number(number2);
            panel.textContent = number1 + " " + userInput + " " + number2;
        }
});
bt6.addEventListener('click', () => {
    if (userInput == ''){
        number1 = number1 + '6';
        number1 = Number(number1);
        panel.textContent = number1;
        } else {
            number2 = number2 + '6';
            number2 = Number(number2);
            panel.textContent = number1 + " " + userInput + " " + number2;
        }
});
bt7.addEventListener('click', () => {
    if (userInput == ''){
        number1 = number1 + '7';
        number1 = Number(number1);
        panel.textContent = number1;
        } else {
            number2 = number2 + '7';
            number2 = Number(number2);
            panel.textContent = number1 + " " + userInput + " " + number2;
        }
});
bt8.addEventListener('click', () => {
    if (userInput == ''){
        number1 = number1 + '8';
        number1 = Number(number1);
        panel.textContent = number1;
        } else {
            number2 = number2 + '8';
            number2 = Number(number2);
            panel.textContent = number1 + " " + userInput + " " + number2;
        }
});
bt9.addEventListener('click', () => {
    if (userInput == ''){
        number1 = number1 + '9';
        number1 = Number(number1);
        panel.textContent = number1;
        } else {
            number2 = number2 + '9';
            number2 = Number(number2);
            panel.textContent = number1 + " " + userInput + " " + number2;
        }
});
bt0.addEventListener('click', () => {
    if (userInput == ''){
        number1 = number1 + '0';
        number1 = Number(number1);
        panel.textContent = number1;
        } else {
            number2 = number2 + '0';
            number2 = Number(number2);
            panel.textContent = number1 + " " + userInput + " " + number2;
        }
});