// for loop in array

let fruits = ["apple", "mango","grapes"];
// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

let fruits1 = [];
for(let i=0; i<fruits.length; i++){
     fruits1.push(fruits[i].toUpperCase());
}
console.log(fruits1);