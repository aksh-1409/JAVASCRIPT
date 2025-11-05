//if want to have know that which key is pressed anywhere to the body then 

const body =  document.body;

body.addEventListener("keypress",(e)=>{
    console.log(e.key);
})

//if we want to have assign the mouse element pr leke jaye tb event lage to phir-
const btn = document.querySelector(".btn-headline");
btn.addEventListener("mouseover",()=>{
    console.log("mouse over");
})
btn.addEventListener("mouseleave",()=>{
    console.log("mouse leave");
})