// use const for creating array

let fruits = ["apple", "mango", "grapes"];
fruits.push("banana");
console.log(fruits);

const fruits1 = ["apple", "mango", "grapes"];
fruits1.push("banana");
console.log(fruits1);

fruits1 = fruits;
console.log(fruits1);