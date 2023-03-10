// CALCULATIONS
var button0 = document.querySelector('.button0');
var button1 = document.querySelector('.button1');
var button2 = document.querySelector('.button2');
var button3 = document.querySelector('.button3');
var button4 = document.querySelector('.button4');
var button5 = document.querySelector('.button5');
var button6 = document.querySelector('.button6');
var button7 = document.querySelector('.button7');
var button8 = document.querySelector('.button8');
var button9 = document.querySelector('.button9');
var buttonDecimal = document.querySelector('.buttonDecimal');
let num1;
let operator;



function logValue (button){
    var value = button.innerHTML;
    document.querySelector('.input').value += value;
}

function reset (){
    document.querySelector('.input').value = "";
}

function add (){
    num1 = document.querySelector('.input').value;
    console.log(num1);
    operator = "+"
    document.querySelector('.input').value = "";
}

function subtract (){
    num1 = document.querySelector('.input').value;
    console.log(num1);
    operator = "-"
    document.querySelector('.input').value = "";
}

function multiply (){
    num1 = document.querySelector('.input').value;
    console.log(num1);
    operator = "*"
    document.querySelector('.input').value = "";
}

function divide (){
    num1 = document.querySelector('.input').value;
    console.log(num1);
    operator = "/"
    document.querySelector('.input').value = "";
}

function del () {
    let input = document.querySelector('.input').value;
    document.querySelector('.input').value = input.slice(0, -1);
}


function equals (){
    if (operator ==="+"){
        var num2 = document.querySelector('.input').value;
        document.querySelector('.input').value = Number(num1) + Number(num2);
    } else if (operator ==="-"){
        var num2 = document.querySelector('.input').value;
        document.querySelector('.input').value = Number(num1) - Number(num2);
    }
    else if (operator ==="*"){
        var num2 = document.querySelector('.input').value;
        document.querySelector('.input').value = Number(num1) * Number(num2);
    } else if (operator ==="/"){
        var num2 = document.querySelector('.input').value;
        document.querySelector('.input').value = Number(num1) / Number(num2);
    }
    
}


// THEMES
const radioButtons = document.querySelectorAll('input[type="radio"][name="options"]');
const body = document.querySelector("body");
const logo = document.querySelector(".logo");
const themeSpan = document.querySelector("span");
const themeButton = document.querySelectorAll(".btn");
const inputField =  document.querySelector(".input");
const containerBottom = document.querySelector(".containerBottom");
const buttonDel = document.querySelector(".buttonDel");
const buttonReset = document.querySelector(".buttonReset");
const buttonEqual = document.querySelector(".buttonEqual");
const buttons = document.querySelectorAll(".button");



function themeChange (){
    for (let i = 0; i < radioButtons.length; i++){
        var theme;
        if (radioButtons[i].checked){
            theme = radioButtons[i].id;
            
        }
        
    }   
    if (theme === "themeButton1"){
        body.style.backgroundColor = "hsl(222, 26%, 31%)"
        logo.style.color = "white";
        themeSpan.style.color = "white";
        for (let j = 0; j < themeButton.length; j++){
            themeButton[j].style.backgroundColor = "hsl(223, 31%, 20%)";
        }
        for (let k = 0; k < buttons.length; k++){
            buttons[k].style.color = "hsl(221, 14%, 31%)"
            buttons[k].style.backgroundColor = "hsl(0, 0%, 100%)";
            buttons[k].style.boxShadow = "0px 3px hsl(28, 16%, 65%)"
        }
        inputField.style.backgroundColor = "hsl(224, 36%, 15%)";
        inputField.style.color = "white";
        containerBottom.style.backgroundColor = "hsl(223, 31%, 20%)";
        buttonDel.style.backgroundColor = "hsl(225, 21%, 49%)";
        buttonDel.style.color = "white";
        buttonDel.style.boxShadow = "0px 3px hsl(224, 28%, 35%)";
        buttonReset.style.backgroundColor = "hsl(225, 21%, 49%)";
        buttonReset.style.color = "white";
        buttonReset.style.boxShadow = "0px 3px hsl(224, 28%, 35%)";
        buttonEqual.style.backgroundColor = "hsl(6, 70%, 34%)";
        buttonEqual.style.color = "white";
        buttonEqual.style.boxShadow = "0px 3px hsl(6, 70%, 34%)";
        
    } else if (theme === "themeButton2"){
        body.style.backgroundColor = "hsl(0, 0%, 90%)";
        logo.style.color = "hsl(60, 10%, 19%)";
        themeSpan.style.color = "hsl(60, 10%, 19%)";
        for (let j = 0; j < themeButton.length; j++){
            themeButton[j].style.backgroundColor = "hsl(0, 5%, 81%)";
        }
        for (let k = 0; k < buttons.length; k++){
            buttons[k].style.color = "hsl(221, 14%, 31%)";
            buttons[k].style.backgroundColor = "hsl(0, 0%, 100%)";
            buttons[k].style.boxShadow = "0px 3px hsl(28, 16%, 65%)"
        }
        inputField.style.backgroundColor = "white";
        inputField.style.color = "hsl(60, 10%, 19%)";
        containerBottom.style.backgroundColor = "hsl(0, 5%, 81%)";
        buttonDel.style.backgroundColor = "hsl(185, 42%, 37%)";
        buttonDel.style.color = "white";
        buttonDel.style.boxShadow = "0px 3px hsl(185, 58%, 25%)"
        buttonReset.style.backgroundColor = "hsl(185, 42%, 37%)";
        buttonReset.style.color = "white";
        buttonReset.style.boxShadow = "0px 3px hsl(185, 58%, 25%)"
        buttonEqual.style.backgroundColor = "hsl(25, 98%, 40%)";
        buttonEqual.style.color = "white";
    } else if (theme === "themeButton3"){
        body.style.backgroundColor = "hsl(268, 75%, 9%)";
        logo.style.color = "hsl(52, 100%, 62%)";
        themeSpan.style.color = "hsl(52, 100%, 62%)";
        for (let j = 0; j < themeButton.length; j++){
            themeButton[j].style.backgroundColor = "hsl(268, 71%, 12%)";
            
        }
        for (let k = 0; k < buttons.length; k++){
            buttons[k].style.color = "hsl(52, 100%, 62%)"
            buttons[k].style.backgroundColor = "hsl(268, 47%, 21%)"
            buttons[k].style.boxShadow = "0px 3px hsl(285, 91%, 52%)"
        }
        inputField.style.backgroundColor = "hsl(268, 71%, 12%)";
        inputField.style.color = "hsl(52, 100%, 62%)";
        containerBottom.style.backgroundColor = "hsl(268, 71%, 12%)";
        buttonDel.style.backgroundColor = "hsl(281, 89%, 26%)";
        buttonDel.style.color = "white";
        buttonReset.style.backgroundColor = "hsl(281, 89%, 26%)";
        buttonReset.style.color = "white";
        buttonEqual.style.backgroundColor = "hsl(176, 100%, 44%)";
        buttonEqual.style.color = "hsl(198, 20%, 13%)";
        buttonEqual.style.boxShadow = "0px 3px hsl(177, 92%, 70%)"
        
    }
}
