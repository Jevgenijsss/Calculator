//Variables
const val1 = document.querySelector(".val1");
const val2 = document.querySelector(".val2");
const operatorContainer = document.querySelector(".operator")
const btn = document.querySelectorAll(".num");
const clearAllBtn = document.querySelector(".clear_all");
const operatorBtn = document.querySelectorAll(".operator_btn");
const eqBtn = document.querySelector(".equals_btn");
const dot = document.querySelector(".dot");
const deleteBtn = document.querySelector(".delete_btn");


//Events

//Clear all button onclick event
clearAllBtn.addEventListener("click", function(){
    val1.textContent = "0";
    val2.textContent = "";
    operatorContainer.textContent = "";
})


//Equal burron onclick event
eqBtn.addEventListener('click',  function(){
    if(val2.textContent && operatorContainer.textContent !== ""){
        operate();
        operatorContainer.textContent = "";
        val2.textContent = "";
        
    } 
});

//Adding decimal dot - onclick
dot.addEventListener('click', dotButton)
//Adding decimal dot - pressing dot key
document.addEventListener("keydown",function(event){
    if(event.keyCode === 190) {
        dotButton();
        event.preventDefault();
    }
});

window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    console.log(e.keyCode);
});

document.addEventListener("keydown", function(event){
    if(event.keyCode === 49){
        if(val1.textContent.startsWith("0") && !val1.textContent.includes(".")){
            val1.textContent = "";}
            if(operatorContainer.textContent === ""){
                val1.textContent += "1";
            } else {
                val2.textContent += "1";
            }
    }else if(event.keyCode === 50){
        if(val1.textContent.startsWith("0") && !val1.textContent.includes(".")){
            val1.textContent = "";}
            if(operatorContainer.textContent === ""){
                val1.textContent += "2";
            } else {
                val2.textContent += "2";
            }
    }else if(event.keyCode === 51){
        if(val1.textContent.startsWith("0") && !val1.textContent.includes(".")){
            val1.textContent = "";}
            if(operatorContainer.textContent === ""){
                val1.textContent += "3";
            } else {
                val2.textContent += "3";
            }
    }else if(event.keyCode === 52){
        if(val1.textContent.startsWith("0") && !val1.textContent.includes(".")){
            val1.textContent = "";}
            if(operatorContainer.textContent === ""){
                val1.textContent += "4";
            } else {
                val2.textContent += "4";
            }
    }else if(event.keyCode === 53){
        if(val1.textContent.startsWith("0") && !val1.textContent.includes(".")){
            val1.textContent = "";}
            if(operatorContainer.textContent === ""){
                val1.textContent += "5";
            } else {
                val2.textContent += "5";
            }
    }else if(event.keyCode === 54){
        if(val1.textContent.startsWith("0") && !val1.textContent.includes(".")){
            val1.textContent = "";}
            if(operatorContainer.textContent === ""){
                val1.textContent += "6";
            } else {
                val2.textContent += "6";
            }
    }else if(event.keyCode === 55){
        if(val1.textContent.startsWith("0") && !val1.textContent.includes(".")){
            val1.textContent = "";}
            if(operatorContainer.textContent === ""){
                val1.textContent += "7";
            } else {
                val2.textContent += "7";
            }
    }else if(event.keyCode === 56){
        if(val1.textContent.startsWith("0") && !val1.textContent.includes(".")){
            val1.textContent = "";}
            if(val1.textContent !== "" && operatorContainer.textContent === ""){
                val1.textContent += "8";
            } 
            else{
                val2.textContent += "8";
            }
    }
    else if(event.keyCode === 57){
        if(val1.textContent.startsWith("0") && !val1.textContent.includes(".")){
            val1.textContent = "";}
            if(operatorContainer.textContent === ""){
                val1.textContent += "9";
            } else {
                val2.textContent += "9";
            }
    }else if(event.keyCode === 48){
        if(val1.textContent.startsWith("0") && !val1.textContent.includes(".")){
            val1.textContent = "";}
            if(operatorContainer.textContent === ""){
                val1.textContent += "0";
            } else {
                val2.textContent += "0";
            }
    }else if(event.shiftKey && event.keyCode === 187){
        if(operatorContainer.textContent === ""){
            operatorContainer.textContent = "+";
        }
    }else if(event.keyCode === 191){
        if(operatorContainer.textContent === ""){
            operatorContainer.textContent = "/";
        }
    }else if(event.keyCode === 189){
        if(operatorContainer.textContent === ""){
            operatorContainer.textContent = "-";
        }
    }else if(event.keyCode === 187 && val2.textContent !== ""){
        operate();
        operatorContainer.textContent = "";
        val2.textContent = "";
    }
    
    else {
        return;
    }
        if(operatorContainer.textContent.startsWith("0") && !operatorContainer.textContent.includes(".")){
    }
    val1.innerText = val1.innerText.substring(0, 12);   
})

//Delete button - clicking on DEL button
deleteBtn.addEventListener('click', deleteButton)
//Pressing "Backspace" key
document.addEventListener("keydown",function(event){
    if(event.keyCode === 8) {
        deleteButton();
        event.preventDefault();
    }
});

//Functions

function add(){
    let addResult = Number(val1.textContent) + Number(val2.textContent);
    val1.textContent = addResult;
}



function subtract(){
    let subtractResult = Number(val1.textContent) - Number(val2.textContent);
    val1.textContent = subtractResult;
}



function multiply(){
    let multiplyResult = Number(val1.textContent) * Number(val2.textContent);
    val1.textContent = multiplyResult;
}



function divide(){
    let divideResult = Math.round((((Number(val1.textContent) / Number(val2.textContent))) + Number.EPSILON) * 10000) / 10000;
    if(val2.textContent === "0") {
        alert("Error: Cannot divide by zero.");
        val1.textContent = "0";
    } else {
        val1.textContent = divideResult;
    }
}



function operate() {
    if (operatorContainer.textContent === "+") {
        add();
    } else if (operatorContainer.textContent === "-") {
        subtract();
    } else if (operatorContainer.textContent === "*") {
        multiply();
    } else if (operatorContainer.textContent === "/"){
        divide();
    }
}

function appendOperators() {
    for (let i = 0; i < operatorBtn.length; i++) {
        let values = operatorBtn[i].textContent;
        operatorBtn[i].addEventListener('click', function(){
            if(val2.textContent !== ""){
                operate();
                val2.textContent = "";
                operatorContainer.textContent = "";
            }

            if(val1.textContent !== ""){
                operatorContainer.textContent = "";
            }
           
            operatorContainer.append(values);
            if(val1.textContent === "0"){
                operatorContainer.textContent = "";
            }
        }) 
    }
}


function appendNumbers() {
    for (let i = 0; i < btn.length; i++) {
        let values = btn[i].textContent;
        btn[i].addEventListener('click', function(){
            if(operatorContainer.textContent === "") {
                if(val1.textContent.startsWith("0") && !val1.textContent.includes(".")){
                    val1.textContent = "";
                }
                val1.append(values);
            }else {
                if (val2.textContent === '0'){
                    val2.textContent = '';
                }
                val2.append(values);
            }
            
            if(val1.textContent.startsWith("0") && !val1.textContent.includes(".")){ //this doesn't let to put more than 1 zero if 1st digit is zero
                return;
            } 
        val1.innerText = val1.innerText.substring(0, 12);   
        val2.innerText = val2.innerText.substring(0, 12);   
        })
    }
}

function deleteButton(){
    if(val1.textContent !== "" && val2.textContent === "" && operatorContainer.textContent === "") {
        val1.textContent = val1.textContent.slice(0,-1);
    }else if(val1.textContent !== "" && val2.textContent === ""){
        operatorContainer.textContent = "";}
    else if(val1.textContent !== "" && val2.textContent !==""){
        val2.textContent = val2.textContent.slice(0,-1);
    } 
    if(val1.textContent === "" && val2.textContent === "" && operatorContainer.textContent === "") {
        val1.textContent = "0";
    }
}

function dotButton(){
        if(val2.textContent === "" && !val1.textContent.includes(".") && operatorContainer.textContent === "") {
            val1.textContent += ".";
        } else if (val1.textContent !== "" && val2.textContent == "" && !val2.textContent.includes(".") && operatorContainer.textContent !== ""){
            val2.textContent = "0";
            val2.textContent += ".";
        } else if (val2.textContent !== "" && !val2.textContent.includes(".")){
            val2.textContent += ".";
        }
    }

appendNumbers();
appendOperators();




