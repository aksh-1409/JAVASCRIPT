// how to clone array

//how to concatenaten two arrays

let array1 = ["item1", "item2"];
//let array2 = array1;
//here === and ==  in case of array both checks the refference to which the variable is pointing
//console.log(array1===array2);

//now if we want to have separate array with same values of the previous one then manually we create array and insert but it is not a good way
// so for that clone the array

//1st method
// let array2 = [].concat(array1);
// let array2 = [].concat(array1, ["item 2, item 4"]).concat(["item3"]);
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);

//2nd method
// let array2 = array1.slice(0);
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);

//3rd method
//spread operator
// let array2 = [...array1];

// let array3 = ["item5","item6"];
// let array2 = [...array1, "item 2, item 4" , ...array3].concat(["item3"]);
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);



