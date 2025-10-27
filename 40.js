//block scope vs function scope

//let and const are block scope
//var is function scope

// {
//    const fname = "mohit";
//    console.log(fname);
// }
//console.log(fname); //error not defined const and let are block scope

{
  var fname = "mohit";
  console.log(fname);
}

console.log(fname); //mohit var is function scope means it is accessible outside the block
