//methods of string
//string are immutable

let name = "      harshit    ";

console.log(name);
console.log(name.length);

name.trim();
console.log(name.length); // strings are immutable

let string = name.trim();
console.log(string);
console.log(string.length);

console.log("````````````````````````````````````````");

console.log(name.toLowerCase());
console.log(name.toUpperCase());

//slice same as substring

let newString = string.slice(0,4);
console.log(newString);