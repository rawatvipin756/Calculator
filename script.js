let inputTask=document.getElementById("inputTask");
let buttons=document.querySelectorAll(".boxes button");

buttons.forEach((button)=> {
    button.addEventListener("click",()=> {
        console.log(button.innerText);
    })
});