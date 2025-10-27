//rest parameters means remaining values of the arguments are passed to the parameters as the array to the single last variable of the parameter

// function myfunc(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// myfunc(1,2,3,4,5);

function addAll(...num){
    let total = 0;
    for(let i of num){
        total += i;
    }
    return total;
}
console.log(addAll(1,2,3,4,5));