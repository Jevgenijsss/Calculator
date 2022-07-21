//Variables
const calcOutput = document.querySelector(".calculator_output");
const val1 = document.querySelector(".val1");
const val2 = document.querySelector(".val2");
const operatorContainer = document.querySelector(".operator")
const resultContainer = document.querySelector(".resultContainer");
const btn = document.querySelectorAll(".num");
const clearAllBtn = document.querySelector(".clear_all");
const operatorBtn = document.querySelectorAll(".operator_btn");
const eqBtn = document.querySelector(".equals_btn");
const minusBtn = document.querySelector(".minus_btn");


//Clear all button onclick event
clearAllBtn.addEventListener("click", function(){
    val1.textContent = "0";
    val2.textContent = "";
    operatorContainer.textContent = "";
    resultContainer.textContent = "";
})


//Equal burron onclick event
eqBtn.addEventListener('click',  function(){
    if(val2.textContent && operatorContainer.textContent !== ""){
        operate();
        val1.textContent = "";
        val2.textContent = "";
        operatorContainer.textContent = "";
    } 
});



function add(){

    resultContainer.append(Number(val1.textContent) + Number(val2.textContent));
}



function subtract(){
    resultContainer.append(Number(val1.textContent) - Number(val2.textContent));
}



function multiply(){
    resultContainer.append(Number(val1.textContent) * Number(val2.textContent));
}



function divide(){
    resultContainer.append(Math.round((((Number(val1.textContent) / Number(val2.textContent))) + Number.EPSILON) * 10000) / 10000);
    
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
                val1.textContent = "";
                val2.textContent = "";
                val1.append(Math.round((Number(resultContainer.textContent) + Number.EPSILON) * 10000)/1000);
                resultContainer.textContent = "";
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
            if(val1.textContent.startsWith("0")){
                val1.textContent = "";
            }
        


            if(resultContainer.textContent !== ""){
                resultContainer.textContent = "";
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




appendNumbers();
appendOperators();




