let inputTask=document.getElementById("inputTask");
let buttons=document.querySelectorAll(".boxes button");

let firstNum="";
let operator="";
let secNum="";

buttons.forEach((button)=> {
    button.addEventListener("click",()=> {
        if(button.innerText==="AC"){
            inputTask.value="";
            firstNum="";
            operator="";
            secNum="";
        }
        if (button.innerText === "+" || button.innerText==="-" || button.innerText==="*" || button.innerText==="/") {
            firstNum = inputTask.value;
            operator = button.innerText;
            inputTask.value = inputTask.value + button.innerText;
        }else if(button.innerText==="="){
            if (operator === "+") {
                inputTask.value = Number(firstNum) + Number(secNum);
            } 
            else if (operator === "-") {
                inputTask.value = Number(firstNum) - Number(secNum);
            }else if (operator === "*") {
                inputTask.value = Number(firstNum) * Number(secNum);
            }else if (operator === "/") {
                inputTask.value = Number(firstNum) / Number(secNum);
            }
        }else if (operator === "+" || operator==="-" || operator==="*" || operator==="/") {
            secNum = secNum + button.innerText;
        }else{
            inputTask.value = inputTask.value + button.innerText;
        }
    });
});