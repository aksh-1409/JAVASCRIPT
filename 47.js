//sort method of array jsut sort the elements of array as strings

 const arr=[45,23,1078,89,4,6,1,67,90];
// arr.sort();
// console.log(arr);//gives wrong weird output because it is for sorting the array of string

// const arr = [ "hasrshit","ABC","bit","amit"];
// arr.sort();
// console.log(arr);//gives correct output

//but to sort the array of numbers using sort method is by sort method is a callback function

// const arr=[45,23,1078,89,4,6,1,67,90];
// arr.sort((a,b)=>{
//     return a-b;
// });
// console.log(arr); //gives correct output as ascending order

//for descending order
// arr.sort((a,b)=>{
//     return b-a;
// });
// console.log(arr);

//if do not want to change the original array then clone the original array into the new array using slice method and then use sort method to it

const arr2 = arr.slice(0).sort((a,b)=>{
    return a-b;
});
console.log(arr);
console.log(arr2);


