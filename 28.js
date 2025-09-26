//primitive vs refference type

//primitive
let num1 = 6;
let num2 = num1;
console.log("value of num1",num1);
console.log("value of num2",num2);
num1++;
console.log("after increment");
console.log("value of num1",num1);
console.log("value of num2",num2);
 

//refference
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("item3");
console.log("after push");
console.log("array1",array1);
console.log("array2",array2);