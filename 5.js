const pi = 3.14;

console.log(pi);

//pi = 3.12;
/*
Uncaught TypeError: Assignment to constant variable.
    at 5.js:5:4
(anonymous) @ 5.js:5Understand this error*/
//we cant changes value of const,
//but we can have operation on const 

console.log(pi*23);
