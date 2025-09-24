//for loop
//in for loop if the initialisation is done by let then it is not accessible outside loop , whereas in case of var it is accessible outside 


for(let i=0;i<10;i++){
    console.log(i);
}
console.log(i); //error i not defined

for(var i=0;i<10;i++){
    console.log(i);
}
console.log(i); //i is accessible outside loop

