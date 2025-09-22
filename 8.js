//typesof operator used to find data type of variable
//data types (primitve)
/*string 
boolean
number
undefined
null
symbol
BigInt
*/

let age = 22;
console.log(typeof age);
console.log(typeof "age");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof symbol);
console.log(typeof BigInt);

console.log("```````````````````````````");
//to convert number to string just concat number with  empty string
age = age + "";
console.log(typeof age)
//alternate
age = String(age);
console.log(typeof age);


console.log("```````````````````````````");
//to convert string to number just add + before string
let str = +"ak";
console.log(typeof str);
console.log(str); //NaN
//so it type will be changes from strinig to number but when accessed the value will not be number that why NaN

let str1 = +"20";
console.log(typeof str1);
console.log(str1);
//alternate
str1 = Number(str1);
console.log(typeof str1);
console.log(str1);