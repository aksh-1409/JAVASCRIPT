//default parameters

//before default parameters
// function addTwo(a,b){
//     if(typeof b === "undefined"){
//         b = 0;
//     }
//     return a+b;
// }
// console.log(addTwo(5,3));
// console.log(addTwo(5));


//after default parameters
function addTwo(a,b=0){
    return a+b;
}
console.log(addTwo(5,3));
console.log(addTwo(5));


