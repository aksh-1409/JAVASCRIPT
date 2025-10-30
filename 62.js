function hello(){
    console.log("hello");
}


// javscript function ===> function + object

console.log(hello.name);

// we can add our own properties in function object
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);


//function provide more useful properties

console.log(hello.prototype); // {}

//only functions provide prototype property

//if we create object then it will not provide prototype property

const obj = {};
console.log(obj.prototype); //undefined

//we can add more properties in prototype property

// hello.prototype.abc = "abc";
// console.log(hello.prototype.abc);
// hello.prototype.sing = function(){
//     return "la la la";
// }
// console.log(hello.prototype);
// console.log(hello.prototype.sing());





