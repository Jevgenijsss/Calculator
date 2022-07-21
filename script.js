//Variables
const val1 = document.querySelector(".val1");
const val2 = document.querySelector(".val2");
const operatorContainer = document.querySelector(".operator")
const btn = document.querySelectorAll(".num");
const clearAllBtn = document.querySelector(".clear_all");
const operatorBtn = document.querySelectorAll(".operator_btn");
const eqBtn = document.querySelector(".equals_btn");


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
            if(val1.textContent.startsWith("0")){ //this doesn't let to put more than 1 zero if 1st digit is zero
                val1.textContent = "";
            }

            if(operatorContainer.textContent === "") {
                val1.append(values);
            }else {
                val2.append(values);
            }
            
            if(val1.innerText.length >= 9) {
                val1.innerText = val1.innerText.substring(0, 9);   
            }
        })
    }
}


// val1.append(Math.round((Number(resultContainer.textContent) + Number.EPSILON) * 10000)/10000);

appendNumbers();
appendOperators();



