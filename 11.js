//undefined//
//null

let name;
console.log(typeof name, name);

let name1 = null;
console.log(typeof name1, name1);//bug , error it must be type of null but it is mistake and is not made correct


//BigInt 
//there is a limit to store number in javascript in number type variable so BigInt is used to store large numbers
let num =   BigInt(123456789012345678901234567890);
console.log(num);
console.log(typeof num);

//alternate
let num1 = 123n;
console.log(num1);
console.log(typeof num1);

//operations on BigInt
let num2 = 123n;
let num3 = 456n;
console.log(num2 + num3);

//but we cant perform operations on BigInt and number
let num4 = 123n;
let num5 = 456;
console.log(num4 + num5); //error 
/*
11.js:30 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
    at 11.js:30:18*/
