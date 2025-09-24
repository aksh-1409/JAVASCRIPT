//nested if else  

let winningnumber = 19;
let userguess = +prompt("enter a number:");

if(userguess === winningnumber){
    console.log("congratulations you guessed it right");
}else{
    if(userguess < winningnumber){
        console.log("too low");
    }else{
        console.log("too high");
    }
}
